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

  getUserByEmail(email: string): User {
    var userFound: User = null;
    this.users.some((elem, index) => {
      if (elem.email === email) {
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
  email: string;
  starsAnnouncer: number;
  starsApplicant: number;
}

const USERS: User[] = [
  {
    id: 1,
    firstName: "Thibault",
    lastName: "Bellemin",
    email: "arthur.bellemin@gmail.com",
    starsAnnouncer: 3.4,
    starsApplicant: 4.3,
  },
  {
    id: 2,
    firstName: "Sophie",
    lastName: "Marceau",
    email: "sophie.marceau@yahoo.fr",
    starsAnnouncer: 2.0,
    starsApplicant: 3.5,
  },
  {
    id: 3,
    firstName: "Mazine",
    lastName: "Assimi",
    email: "mazine.assimi@insa-lyon.fr",
    starsAnnouncer: 4.8,
    starsApplicant: 4.3,
  }
]