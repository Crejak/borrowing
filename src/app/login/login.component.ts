import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string;
  loginForm = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    if (this.authenticationService.isAuthenticated()) {
      this.router.navigate(['/accueil']);
    }
    this.title = this.utilService.getApplicationName();
  }

  onSubmit() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    let authenticated = this.authenticationService.logIn(email, password);
    if (authenticated) {
      this.router.navigate(['/accueil']);
    } else {
      console.log("Cet utilisateur n'existe pas");
    }
  }

}
