import {data, User} from './data';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userData: User[] = data;
  private PATH: string = 'https://jsonplaceholder.typicode.com/users';

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
      const response = await fetch(this.PATH);

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

  async getUserById(id: number) {
    const response = await fetch(this.PATH + `/${id}`);
    if (!response.ok) throw new Error('Błąd sieci: ' + response.status );
    return response.json();

  }

}
