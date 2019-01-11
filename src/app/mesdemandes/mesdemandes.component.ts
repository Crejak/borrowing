import { Component, OnInit } from '@angular/core';

import { Annonce, AnnoncesService } from '../annonces.service';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user.service';

@Component({
  selector: 'app-mesdemandes',
  templateUrl: './mesdemandes.component.html',
  styleUrls: ['./mesdemandes.component.css']
})
export class MesdemandesComponent implements OnInit {

  annonces: Array<Annonce>;
  private user: User;

  constructor(private authenticationService: AuthenticationService, private annoncesService: AnnoncesService) {}

  ngOnInit() {
    this.user = this.authenticationService.getLoggedInUser();
    if (this.user !== null && this.user !== undefined) {
      this.annonces = this.annoncesService.getAnnoncesParUser(3);
    }
  }
}
