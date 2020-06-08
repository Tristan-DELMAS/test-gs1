import { Component, EventEmitter, OnInit, ViewChild, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class ContactFormComponent implements OnInit {

  @Output() userSaved = new EventEmitter<boolean>();
  @ViewChild('contact') logForm: FormGroupDirective;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private adapter: DateAdapter<any>) {}

  ngOnInit(): void {
    this.adapter.setLocale('fr');
    this.contactForm = this.fb.group({
      birthDate: [null, [Validators.required]],
      email : [null, [Validators.required, Validators.email]],
      firstname: [null, [Validators.required, Validators.minLength(2), Validators.pattern(/[A-Za-zÀ-ù\-\s]+/g)]],
      lastname: [null, [Validators.required, Validators.minLength(2), Validators.pattern(/[A-Za-zÀ-ù\-\s]+/g)]]
    });
  }

  onValidate(): void {
    if (this.contactForm.invalid) {
      return;
    }
    this.userService
      .saveUser(this.contactForm.value.lastname, this.contactForm.value.firstname, this.contactForm.value.birthDate.toDate(), this.contactForm.value.email);
  }

}
