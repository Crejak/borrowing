import { Component, OnInit } from '@angular/core';
import { AnnoncesService, Annonce } from '../annonces.service';
import { UserService, User } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit {
  
  myAnnonce:Annonce;
  myUser:User;
  
  constructor(
    private annoncesService:AnnoncesService,
    private userService:UserService,
    private router: Router,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
) {}

  ngOnInit() {    
    
    let idAnnonce:number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.myAnnonce = this.annoncesService.getAnnonceParId(idAnnonce);  
    this.myUser = this.userService.getUser(this.myAnnonce.idAnnouncer);    

  }

  getStarsAnnouncerStyle() {
    if (this.myUser === null || this.myUser === undefined) {
      this.domSanitizer.bypassSecurityTrustStyle("width: 0%;");
    }
    let stars = this.myUser.starsAnnouncer / 5.0 * 100;
    let style = "width: " + stars + "%;";
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }

  getStarsMaterialStyle() {
    if (this.myUser === null || this.myUser === undefined) {
      this.domSanitizer.bypassSecurityTrustStyle("width: 0%;");
    }
    let stars = this.myAnnonce.stars / 5.0 * 100;
    let style = "width: " + stars + "%;";
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }

}
