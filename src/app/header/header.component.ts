import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from '../util.service';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;
  isAuthenticated: boolean;
  user: User;
  developperMode: boolean

  constructor(
    private utilService: UtilService,
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.user = null;
  }

  ngOnInit() {
    this.title = this.utilService.getApplicationName();
    this.authenticationService.getLoggedInUser().subscribe(user => {
      if (user !== null && user !== undefined) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
      this.user = user;
    });
    this.utilService.getDevelopperMode().subscribe(devMode => {
      this.developperMode = devMode;
    });
  }

  signOut() {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }

}
