import { Injectable } from '@angular/core';
import { Observable, Subscriber, Subject } from 'rxjs';

import { LocalStorageService } from 'ngx-webstorage';

import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  userSaved: Subject<User> = new Subject<User>();

  constructor(private storage: LocalStorageService) {}

  saveUser(name: string, firstname: string, birthdate: Date, email: string): void {
      this.user = new User(firstname, name, birthdate, email);
      this.storage.store('user', this.user);
      this.userSaved.next(this.user);
  }
}
