import { Component, OnInit } from '@angular/core';
import {UtilService} from '../util.service';
import {FormBuilder} from '@angular/forms';
import {AnnoncesService} from '../annonces.service';
import {Annonce} from '../annonces.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  title: string;
  annonce: Annonce;
  creationForm = this.formBuilder.group({
    titre: [''],
    categorie: [''],
    caution: [''],
    maxDuration: [''],
    description: ['']
  });

  constructor(
    private utilService: UtilService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.title = this.utilService.getApplicationName();
  }

  onSubmit() {
    console.log("SUBMIT");
    console.log(this.creationForm.value);
    this.annonce = {
      id: null,
      titre: this.creationForm.value.titre,
      idCategorie: this.creationForm.value.categorie,
      caution: this.creationForm.value.caution,
      duree:  this.creationForm.value.maxDuration,
      description: this.creationForm.value.description,
      photo: ''
    };
  }

}
