import {data, User} from './data';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userData: User[] = data;

  constructor() {
  }

  /* Przykładowa implementacja z Promise  */
  // getUserData(): Promise<User[]> {
  //   return new Promise((resolve) => {
  //     resolve(this.userData);
  //   });
  // }
  //
  /*  Pobieranie userData z API za pomocą fetch i async/await */
  async getUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Błąd sieci: ' + response.status)
      }

      const data = await response.json();
      console.log('data: ' + data);
      return data;
    } catch (error) {
      console.error('Wystąpił błąd: ', error);
    }
  }

}
