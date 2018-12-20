import { Injectable } from '@angular/core';
import { Categorie } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  annonces: Array<Annonce>;

  constructor() {
    this.annonces = ANNONCES;
  }

  getAnnonceParId(id: number): Annonce {
    var annonceFound: Annonce = null;
    this.annonces.some((elem, index) => {
      if (elem.id === id) {
        annonceFound = elem;
        return true;
      }
      return false;
    });
    return annonceFound;
  }

  getAnnoncesParCategories(idCat: number): Array<Annonce> {
    var annonceFound: Array<Annonce> = null;
    this.annonces.some((elem, index) => {
      if (elem.idCategorie === idCat) {
        annonceFound.push(elem);
        return true;
      }
      return false;
    });
    return annonceFound;
  }

  addAnnonce(annonce: Annonce): void {
    if ( this.annonces.length === 0) {
      annonce.id = 1;
    } else {
      annonce.id = this.annonces[this.annonces.length - 1].id + 1;
    }
    this.annonces.push(annonce);
  }

  getAllAnnonces(): Array<Annonce> {
    return this.annonces;
  }
}

export class Annonce {
  id: number;
  titre: string;
  idCategorie: number;
  caution: number;
  duree: string;
  description: string;
  photo: string;
}

const ANNONCES: Annonce[] = [
  {
    id: 1,
    titre: 'Appareil à raclette',
    idCategorie: 1,
    caution: 15,
    duree: '3 jours',
    description: 'Appareil à raclette pour 5 personnes',
    photo: ''
  },
  {
    id: 2,
    titre: 'Raquette de Tennis',
    idCategorie: 7,
    caution: 20,
    duree: '1 jour',
    description: 'Raquette de tennis en bon état, idéal débutant',
    photo: ''
  }
];
