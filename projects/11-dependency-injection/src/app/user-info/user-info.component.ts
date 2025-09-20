import {Component, inject, Inject, Input, numberAttribute, OnInit} from '@angular/core';
import { User } from '../data';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
    <section>
      <p> {{ user?.name }}</p>
      <p> {{ user?.username }}</p>
      <p> {{ user?.email }}</p>
      <p> {{ user?.address?.street }}</p>
      <p> {{ user?.address?.suite }}</p>
      <p> {{ user?.address?.city }}</p>
      <p> {{ user?.address?.zipcode }}</p>
      <p> {{ user?.address?.city }}</p>
      <p> {{ user?.address?.geo?.lat }}</p>
      <p> {{ user?.address?.geo?.lng }}</p>
      <p> {{ user?.phone }}</p>
      <p> {{ user?.website }}</p>
      <p> {{ user?.company?.name }}</p>
      <p> {{ user?.company?.catchPhrase }}</p>
      <p> {{ user?.company?.bs }}</p>
    </section>
  `,
  styles: ``,
})
export class UserInfoComponent{
  protected user: User | null = null;
  private userService = inject(UserService);

  @Input({transform: numberAttribute})
  set id(value: number) {
    this.load(value);
  }

  private async load(id: number): Promise<void> {
    this.user = await this.userService.getUserById(id);
  }
}
