import { Injectable } from '@angular/core';

import { UserService, User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private accounts: UserAccount[];
  private loggedInAccountId: number;

  constructor(private userService: UserService) {
    this.accounts = ACCOUNTS;
    this.loggedInAccountId = null;
  }

  getLoggedInUser(): User {
    if (this.loggedInAccountId !== null && this.loggedInAccountId !== undefined) {
      let loggedInAccount = this.getUserAccount(this.loggedInAccountId);
      let loggedInUser = this.userService.getUser(loggedInAccount.userId);
      return loggedInUser;
    }
    return null;
  }

  logIn(email: string, password: string): boolean {
    if (this.loggedInAccountId !== null && this.loggedInAccountId !== undefined) {
      return false;
    }

    let user = this.userService.getUserByEmail(email);
    let account = this.getUserAccountByUserId(user.id);
    if (account.password === password) {
      this.loggedInAccountId = account.accountId;
      return true;
    }
    this.loggedInAccountId = null;
    return false;
  }

  logOut() {
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
}

class UserAccount {
	accountId: number;
	password: string;
  userId: number;
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