import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor() {
    this.users = USERS;
  }

  getUser(id: number): User {
    var userFound: User = null;
    this.users.some((elem, index) => {
      if (elem.id === id) {
        userFound = elem;
        return true;
      }
      return false;
    });
    return userFound;
  }

  getUserByMail(mail: string): User {
    var userFound: User = null;
    this.users.some((elem, index) => {
      if (elem.mail === mail) {
        userFound = elem;
        return true;
      }
      return false;
    });
    return userFound;
  }
}

export class User {
  id: number;
  firstName: string;
  lastName: string;
  mail: string;
  stars: number;
}

const USERS: User[] = [
  {
    id: 1,
    firstName: "Thibault",
    lastName: "Bellemin",
    mail: "arthur.bellemin@gmail.com",
    stars: 3.4
  },
  {
    id: 2,
    firstName: "Sophie",
    lastName: "Marceaux",
    mail: "sophie.marceaux@yahoo.fr",
    stars: 2.0
  },
  {
    id: 3,
    firstName: "Mazine",
    lastName: "Assimi",
    mail: "mazine.assimi@insa-lyon.fr",
    stars: 4.8
  }
]