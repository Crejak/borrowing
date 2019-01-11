import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  error: string;
  accountCreated: string;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id === 2) {
      this.accountCreated = 'Votre compte a été créé';
    } else {
      this.accountCreated = '';
    }
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
      if (this.id === 3) {
        this.router.navigate(['/evalapplicant']);
      } else if (this.id === 4) {
        this.router.navigate(['/evaladvertiser']);
      } else {
        this.router.navigate(['/accueil']);
      }
    } else {
      this.accountCreated = "";
      this.error = "Adresse email / mot de passe inconnu(s)"
    }
  }

}
