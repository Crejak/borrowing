import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  user: User;
  editMode: boolean;
  profileImage : string;
  selectedFile : File;
  editForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });

  constructor(
    private domSanitizer: DomSanitizer,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.editMode = false;
    this.user = this.authenticationService.getLoggedInUser();
    if (this.user !== null && this.user !== undefined) {
      console.log('my account');
      console.log(this.user);
      this.editForm.setValue({firstName: this.user.firstName, lastName: this.user.lastName})
      if (this.user.profilePicture !== '' && this.user.profilePicture !== null && this.user.profilePicture !== undefined) {
        this.profileImage = this.user.profilePicture;
      } else {
        this.profileImage = 'assets/addImage.png';
      }
    }
  }

  edit() {
    this.editMode = true;
  }

  onSubmit() {
    this.user.profilePicture = this.profileImage;
    this.user.firstName = this.editForm.value.firstName;
    this.user.lastName = this.editForm.value.lastName;
    this.user = this.userService.updateUser(this.user);
    this.editMode = false;
  }

  onFileUpload(event){
      this.selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
      this.profileImage = <string>reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  hasProfilePicture() {
    if (this.user === null || this.user === undefined) {
      return false;
    }
    return this.user.profilePicture !== "";
  }

  getUserProfilePicture() {
    if (this.user === null || this.user === undefined) {
      return "";
    }
    return this.user.profilePicture;
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
    let stars = 73;
    let style = "width: " + stars + "%;";
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }
}
