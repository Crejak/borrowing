import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.getLoggedInUserSubject().subscribe(user => {
      if (user !== null && user !== undefined) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }
}
