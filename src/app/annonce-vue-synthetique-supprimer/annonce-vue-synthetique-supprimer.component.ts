import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../annonces.service';

@Component({
  selector: 'app-annonce-vue-synthetique-supprimer',
  templateUrl: './annonce-vue-synthetique-supprimer.component.html',
  styleUrls: ['./annonce-vue-synthetique-supprimer.component.css']
})
export class AnnonceVueSynthetiqueSupprimerComponent implements OnInit {

  @Input('annonce') annonce: Annonce;
  @Input('onDelete') onDelete?: (an: Annonce) => void;
  @Input('onUndelete') onUndelete?: (an: Annonce) => void;
  @Input('canModify') canModify: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.annonce);
  }

  clickDelete() {
    console.log("click sur delete");
    this.onDelete(this.annonce);
  }

  clickUndelete() {
    console.log("click sur undelete");
    this.onUndelete(this.annonce);
  }
}
