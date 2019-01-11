import { Component, OnInit } from '@angular/core';
import { CategoriesService, Categorie } from '../categories.service';
import { AnnoncesService, Annonce } from '../annonces.service';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  categories: Array<Categorie>;
  annonces: Array<Annonce>;
  idCatSelectionne = 0;
  messageSent: string;
  searchText: string;

  constructor(private categoriesService: CategoriesService,
              private annoncesService: AnnoncesService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')==="2"){
      this.messageSent = "Message envoyé";
    }
    else{
      this.messageSent = "";
    }
    this.categories = this.categoriesService.getAllCategories();
    this.annonces = this.annoncesService.getAllAnnonces().filter(annonce => annonce.enCours);
  }

  updateCategories() {
    const idCat = + this.idCatSelectionne;
    console.log("Update categories ! id = " + idCat);
    if (idCat === 0) {
      this.annonces = this.annoncesService.getAllAnnonces().filter(annonce => annonce.enCours);
    } else {
      this.annonces = this.annoncesService.getAnnoncesParCategories(idCat).filter(annonce => annonce.enCours);
    }
    /*const element = document.getElementsByName('featuredAnnonce2');
    // debugger;
    for (let i = 0; i < element.length; i++) {
      if (this.idCatSelectionne === 0 || element[i].getAttribute('data-cat') === this.idCatSelectionne.toString()) {
        element[i].style.visibility = 'visible';
        element[i].style.width = '';
        element[i].style.height = '';
        element[i].style.marginTop = '10px';
      } else {
        element[i].style.visibility = 'hidden';
        element[i].style.width = '0px';
        element[i].style.height = '0px';
        element[i].style.marginTop = '0px';
      }
    }
    console.log(this.idCatSelectionne);*/
  }

}
