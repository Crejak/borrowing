import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profil-announcer',
  templateUrl: './profil-announcer.component.html',
  styleUrls: ['./profil-announcer.component.css']
})
export class ProfilAnnouncerComponent implements OnInit {

  user: User;

  constructor(
    private domSanitizer: DomSanitizer,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(+userId);
  }

  getUserProfilePicture() {
    if (this.user === null || this.user === undefined || this.user.profilePicture === '') {
      return 'assets/addImage.png';
    }
    return this.user.profilePicture;
  }

  getUserFirstName() {
    if (this.user === null || this.user === undefined) {
      return '';
    }
    return this.user.firstName;
  }

  getUserLastName() {
    if (this.user === null || this.user === undefined) {
      return '';
    }
    return this.user.lastName;
  }

  getUserEmail() {
    if (this.user === null || this.user === undefined) {
      return '';
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

  getStarsMaterialStyle() {
    if (this.user === null || this.user === undefined) {
      this.domSanitizer.bypassSecurityTrustStyle("width: 0%;");
    }
    let stars = 73;
    let style = "width: " + stars + "%;";
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }
}
