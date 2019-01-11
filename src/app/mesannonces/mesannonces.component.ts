import { Component, OnInit } from '@angular/core';

import { Annonce, AnnoncesService } from '../annonces.service';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user.service';

@Component({
  selector: 'app-mesannonces',
  templateUrl: './mesannonces.component.html',
  styleUrls: ['./mesannonces.component.css']
})
export class MesannoncesComponent implements OnInit {

  annonces: Array<Annonce>;
  private user: User;
  enCours = true;

  constructor(private authenticationService: AuthenticationService, private annoncesService: AnnoncesService) {}

  ngOnInit() {
    this.user = this.authenticationService.getLoggedInUser();
    if (this.user !== null && this.user !== undefined) {
      this.updateAnnonces();
    }
  }

  deleteAnnonce = (annonce: Annonce) => {
    console.log("on delete :");
    console.log(annonce);
    this.annoncesService.deleteAnnonce(annonce);
    this.updateAnnonces();
  }

  undeleteAnnonce = (annonce: Annonce) => {
    console.log("on undelete :");
    console.log(annonce);
    this.annoncesService.undeleteAnnonce(annonce);
    this.updateAnnonces();
  }

  switchEnCours() {
    this.enCours = ! this.enCours;
    this.updateAnnonces();
  }

  updateAnnonces() {
    this.annonces = this.annoncesService.getAnnoncesParUser(this.user.id).filter(elem => elem.enCours === this.enCours);
  }
}
