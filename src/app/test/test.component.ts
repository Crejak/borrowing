import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  user: User;

  constructor(
    private authenticationService : AuthenticationService,
    private userService : UserService) {
  }

  getLoggedInUser(): void {
    this.authenticationService.getLoggedInUser().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.getLoggedInUser();
  }

  onClick() {
    let authenticated = this.authenticationService.logIn("mazine.assimi@insa-lyon.fr", "Mazine123");
  }

  onClick2() {
    this.authenticationService.logOut();
  }
}
