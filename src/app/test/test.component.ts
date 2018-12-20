import { Component } from '@angular/core';
import { User, UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  user: User;
  starsApplicant = 45;

  constructor(
    private authenticationService : AuthenticationService,
    private userService : UserService) {
  }
}
