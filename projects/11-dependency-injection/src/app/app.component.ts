import {Component, inject} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./data";
import {UserInfoComponent} from "./user-info/user-info.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <h1>User Listing</h1>
  <div class="container">
    <nav class="user-list" aria-label="User List">
      @for (user of userData; track user.id) {
        <ul>
          <li><a [routerLink]="['user-info', user.id]">{{ user.name }}</a></li>
        </ul>
      }
    </nav>
    <router-outlet/>
  </div>

  `,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  styles: `
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      height: 100vw;
      background-color: #f4f6f8;
    }

    h1 {
      margin: 0;
      padding: 1rem;
      background-color: #3f51b5;
      color: white;
      text-align: center;
      grid-column: 1 / -1;
    }

    .container {
      display: flex;
      flex: 1;
      overflow: hidden;
    }

    nav.user-list {
      width: 280px;
      background-color: #fff;
      border-right: 1px solid #ddd;
      overflow-y: auto;
      padding: 1rem;
    }

    nav.user-list ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    nav.user-list li {
      margin-bottom: 0.5rem;
    }

    nav.user-list a {
      text-decoration: none;
      display: block;
      padding: 0.6rem 0.8rem;
      border-radius: 4px;
      color: #333;
      font-weight: 600;
      transition: background-color 0.3s ease;
    }

    nav.user-list a:hover,
    nav.user-list a:focus {
      background-color: #3f51b5;
      color: white;
      outline: none;
    }
  `
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
