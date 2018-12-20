import { Component, OnInit, Input } from '@angular/core';
import { AnnoncesService, Annonce } from '../annonces.service';

@Component({
  selector: 'app-annonce-vue-synthetique',
  templateUrl: './annonce-vue-synthetique.component.html',
  styleUrls: ['./annonce-vue-synthetique.component.css']
})



export class AnnonceVueSynthetiqueComponent implements OnInit {
  
 
  @Input('id') id: number;
  @Input('titre') titre: String;
  @Input('idCat') idCat: number;
  @Input('caution') caution: number;
  @Input('duree') duree: String;
  @Input('description') description: String;
  @Input('photo') photo: String;

  constructor() { }

  ngOnInit() {
    console.log(this.id);
  }

}
