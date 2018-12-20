import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../user.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  user: User;

  constructor(
    private domSanitizer: DomSanitizer,
    private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.user = this.authenticationService.getLoggedInUser();
  }

  getUserFirstName() {
    if (this.user === null || this.user === undefined) {
      return "";
    }
    return this.user.firstName;
  }

  getUserLastName() {
    if (this.user === null || this.user === undefined) {
      return "";
    }
    return this.user.lastName;
  }

  getUserEmail() {
    if (this.user === null || this.user === undefined) {
      return "";
    }
    return this.user.email;
  }

  getStarsAnnouncerStyle() {
    if (this.user === null || this.user === undefined) {
      this.domSanitizer.bypassSecurityTrustStyle("width: 0%;");
    }
    let stars = this.user.starsAnnouncer / 5.0 * 100;
    let style = "width: " + stars + "%;";
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }

  getStarsApplicantStyle() {
    if (this.user === null || this.user === undefined) {
      this.domSanitizer.bypassSecurityTrustStyle("width: 0%;");
    }
    let stars = this.user.starsApplicant / 5.0 * 100;
    let style = "width: " + stars + "%;";
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }

  getStarsMaterialStyle() {
    if (this.user === null || this.user === undefined) {
      this.domSanitizer.bypassSecurityTrustStyle("width: 0%;");
    }
    let stars = 100;
    let style = "width: " + stars + "%;";
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }
}
