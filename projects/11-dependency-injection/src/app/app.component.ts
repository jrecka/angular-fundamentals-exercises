import {Component, inject} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./data";
import {UserInfoComponent} from "./user-info/user-info.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <h1>User Listing</h1>
  @for (user of userData; track user.id) {
    <ul>
      <li><a [routerLink]="['user-info', user.id]">{{ user.name }} {{user.id}}| {{ $index }}</a></li>
    </ul>
  }

  <router-outlet/>
  `,
  imports: [
    UserInfoComponent,
    RouterLink,
    RouterOutlet
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
