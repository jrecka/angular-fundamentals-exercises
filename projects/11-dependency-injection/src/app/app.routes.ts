import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {UserInfoComponent} from "./user-info/user-info.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'user-info/:id',
    component: UserInfoComponent
  }
];
