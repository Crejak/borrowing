import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginguard',
  templateUrl: './loginguard.component.html',
  styleUrls: ['./loginguard.component.css']
})
export class LoginguardComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    if (! this.authenticationService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }
}
