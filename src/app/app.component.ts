import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from './services/marvel-api.service';
import { UserService } from './services/user.service';
import { User } from './class/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'marvel-test-app';
  showMarvel = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userSaved.subscribe(
      (user: User) => {
        this.showMarvel = true;
      }
    );
  }
}
