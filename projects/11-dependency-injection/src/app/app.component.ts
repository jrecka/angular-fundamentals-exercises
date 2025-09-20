import {Component, inject} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./data";
import {UserInfoComponent} from "./user-info/user-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <h1>User Listing</h1>
  @for (user of userData; track user.id) {
    <app-user-info [user]="user"/>
  }`,
  imports: [
    UserInfoComponent
  ]
})
export class AppComponent {
  userService = inject(UserService);
  userData: User[] = [];
  /* Wersja z Promise */
  // constructor() {
  //   this.userService.getUserData();
  // }


  /* Wersja z async/await u i fetch  */
  async ngOnInit(): Promise<void> {
    try {
      this.userData = await this.userService.getUserData();
    } catch (error) {
      console.log('Error: ', error);
    }
  }

}
