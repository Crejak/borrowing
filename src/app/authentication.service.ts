import { Injectable } from '@angular/core';

import { UserService, User } from './user.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  accounts: UserAccount[];
  private loggedInAccountId: number;
  private loggedInUser: Subject<User>;

  constructor(private userService: UserService) {
    this.accounts = ACCOUNTS;
    this.loggedInAccountId = null;
    this.loggedInUser = new Subject<User>();
  }

  getLoggedInUserSubject(): Subject<User> {
    return this.loggedInUser;
  }

  getLoggedInUser(): User {
    if (this.loggedInAccountId === null || this.loggedInAccountId === undefined) {
      return null;
    }
    let account = this.getUserAccount(this.loggedInAccountId);
    let user = this.userService.getUser(account.userId);
    return user;
  }

  isAuthenticated(): boolean {
    return this.loggedInAccountId !== null && this.loggedInAccountId !== undefined;
  }

  logIn(email: string, password: string): boolean {
    if (this.loggedInAccountId !== null && this.loggedInAccountId !== undefined) {
      return false;
    }

    let user = this.userService.getUserByEmail(email);
    if (user !== null && user !== undefined) {
      let account = this.getUserAccountByUserId(user.id);
      if (account.password === password) {
        this.loggedInAccountId = account.accountId;
        this.loggedInUser.next(user);
        return true;
      }
    }
    this.loggedInAccountId = null;
    return false;
  }

  logOut() {
    this.loggedInUser.next(null);
    this.loggedInAccountId = null;
  }

  private getUserAccountByUserId(userId: number): UserAccount {
    var accountFound: UserAccount = null;
    this.accounts.some((elem, index) => {
      if (elem.userId === userId) {
        accountFound = elem;
        return true;
      }
      return false;
    });
    return accountFound;
  }

  private getUserAccount(accountId: number): UserAccount {
    var accountFound: UserAccount = null;
    this.accounts.some((elem, index) => {
      if (elem.accountId === accountId) {
        accountFound = elem;
        return true;
      }
      return false;
    });
    return accountFound;
  }

  addAccount(userAccount: UserAccount){
    userAccount.accountId = this.accounts[this.accounts.length-1].accountId+1;
    this.accounts.push(userAccount);
  }
}

export class UserAccount {
	accountId: number;
	password: string;
  userId: number;

  constructor(password: string, userId: number){
    this.password = password;
    this.userId = userId;
  }
};

const ACCOUNTS: UserAccount[] = [
	{
		accountId: 1,
		password: "Arthur123",
    userId: 1
	},
	{
		accountId: 2,
		password: "Sophie123",
    userId: 2
	},
	{
		accountId: 3,
		password: "Mazine123",
    userId: 3
	}
]