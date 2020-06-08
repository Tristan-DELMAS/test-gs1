import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';

import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactFormComponent,
    CharactersListComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatToolbarModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
