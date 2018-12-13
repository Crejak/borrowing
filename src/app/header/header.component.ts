import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from '../util.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;
  isAuthenticated: boolean;

  constructor(
    private utilService: UtilService,
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.title = this.utilService.getApplicationName();
    let user = this.authenticationService.getLoggedInUser();
    if (user !== null && user !== undefined) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  signOut() {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }

}
