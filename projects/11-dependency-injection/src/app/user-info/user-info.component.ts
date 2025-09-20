import {Component, inject, Inject, Input, numberAttribute, OnInit} from '@angular/core';
import { User } from '../data';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
    <section class="user-details" aria-live="polite" aria-atomic="true">
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
  styles: `
    section.user-details {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
      background-color: white;
    }
    section.user-details p {
      margin: 0.5rem 0;
      padding-bottom: 0.3rem;
      border-bottom: 1px solid #ddd;
      word-break: break-word;
    }
    section.user-details p:last-child {
      border-bottom: none;
    }
    @media (max-width: 768px) {
      body {
        flex-direction: column;
      }
      nav.user-list {
        width: 100%;
        height: 150px;
        border-right: none;
        border-bottom: 1px solid #ddd;
        overflow-x: auto;
        white-space: nowrap;
      }
      nav.user-list ul {
        display: flex;
        gap: 0.5rem;
      }
      nav.user-list li {
        margin-bottom: 0;
      }
      nav.user-list a {
        white-space: nowrap;
        padding: 0.5rem 1rem;
      }
      section.user-details {
        padding: 1rem;
        height: calc(100vh - 150px - 56px);
      }
    }
  `,
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
