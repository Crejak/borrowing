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
    /*const annonceFound: Array<Annonce> = [];
    this.annonces.some((elem, index) => {
      if (elem.idCategorie === idCat) {
        annonceFound.push(elem);
        return true;
      }
      return false;
    });
    return annonceFound;*/
    const result = this.annonces.filter(annonce => annonce.idCategorie === idCat);
    console.log("service : on retourne ");
    console.log(result);
    return result;
  }

  getAnnoncesParUser(idUser: number): Array<Annonce> {
    var found = this.annonces.filter(annonce => annonce.idAnnouncer === idUser);
    return found;
  }

  addAnnonce(annonce: Annonce): void {
    if ( this.annonces.length === 0) {
      annonce.id = 1;
    } else {
      annonce.id = this.annonces[this.annonces.length - 1].id + 1;
    }
    this.annonces.push(annonce);
  }

  deleteAnnonce(annonce: Annonce) {
    const index = this.annonces.findIndex(elem => elem.id === annonce.id);
    if (index > -1) {
      this.annonces[index].enCours = false;
    } else {
      console.error('Error on delete annonce : annonce doesn\'t exist');
      console.error(annonce);
      console.error('Current annonces are : ');
      console.error(this.annonces);
    }
  }

  undeleteAnnonce(annonce: Annonce) {
    const index = this.annonces.findIndex(elem => elem.id === annonce.id);
    if (index > -1) {
      this.annonces[index].enCours = true;
    } else {
      console.error('Error on undelete annonce : annonce doesn\'t exist');
      console.error(annonce);
      console.error('Current annonces are : ');
      console.error(this.annonces);
    }
  }

  getAllAnnonces(): Array<Annonce> {
    return this.annonces;
  }
}

export class Annonce {
  id: number;
  idCategorie: number;
  idAnnouncer: number;
  titre: string;
  caution: number;
  duree: string;
  description: string;
  photo: string;
  enCours: boolean;
  stars: number;
}

const ANNONCES: Annonce[] = [
  {
    id: 1,
    idCategorie: 1,
    idAnnouncer: 3,
    titre: 'Appareil à raclette',
    caution: 15,
    duree: '3 jours',
    description: 'Appareil à raclette pour 5 personnes',
    photo: 'https://image.darty.com/petit_electromenager/cuisson_conviviale-pierre_raclette/raclette/tefal_re132812_s1210163656551A_132710527.jpg',
    enCours: true,
    stars: 4.2
  },
  {
    id: 2,
    idCategorie: 7,
    idAnnouncer: 2,
    titre: 'Raquette de Tennis',
    caution: 20,
    duree: '1 jour',
    description: 'Raquette de tennis en bon état, idéal débutant',
    photo: 'https://www.sportsystem.fr/29696-tm_large_default/pure-drive-2018.jpg',
    enCours: true,
    stars: 3.1
  },
  {
    id: 3,
    idCategorie: 1,
    idAnnouncer: 3,
    titre: 'Spatule à omelette',
    caution: 59.99,
    duree: '1 jour',
    description: 'Spatule UNIQUEMENT pour les omelettes. Ne fonctionne pas avec d\'autre type de plats.',
    photo: 'https://images-na.ssl-images-amazon.com/images/I/71-DOFMkjxL._SL1500_.jpg',
    enCours: true,
    stars: 4.1
  },
  {
    id: 4,
    idCategorie: 2,
    idAnnouncer: 3,
    titre: 'Aspirateur',
    caution: 5,
    duree: '0.5 jour',
    description: 'Bon aspirateur, le bouton de rembobinage du cable a un peu du mal des fois.',
    photo: 'https://images-na.ssl-images-amazon.com/images/I/71Jee8nDjgL._SL1500_.jpg',
    enCours: false,
    stars: 3.6
  },
];
