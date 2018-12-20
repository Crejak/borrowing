import { Component, OnInit } from '@angular/core';
import { CategoriesService, Categorie } from '../categories.service';
import { AnnoncesService, Annonce } from '../annonces.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  categories:Array<Categorie>;
  annonces:Array<Annonce>;

  constructor(private categoriesService: CategoriesService,
              private annoncesService:AnnoncesService
  ) { }

  ngOnInit() {
    this.categories = this.categoriesService.getAllCategories();
    this.annonces = this.annoncesService.getAllAnnonces();
    //console.log(this.categories);
  }

}
