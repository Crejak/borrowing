import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Array<Categorie>;

  constructor() {
    this.categories = CATEGORIES;
  }

  getCategorie(id: number): Categorie {
    var catFound: Categorie = null;
    this.categories.some((elem, index) => {
      if (elem.id === id) {
        catFound = elem;
        return true;
      }
      return false;
    });
    return catFound;
  }

  getAllCategories() : Array<Categorie>{
    return this.categories;
  }

}

export class Categorie {
  id: number;
  value: String;
}

const CATEGORIES: Categorie[] = [
  {
    id: 0,
    value: "Categories"
  },
  {
    id: 1,
    value: "Cuisine"
  },
  {
    id: 2,
    value: "Electroménager"
  },
  {
    id: 3,
    value: "Livres"
  },
  {
    id: 4,
    value: "Ménage"
  },
  {
    id: 5,
    value: "Multimédia"
  },
  {
    id: 6,
    value: "Scolaire"
  },
  {
    id: 7,
    value: "Sport"
  },
  {
    id: 7,
    value: "Autres"
  }
]
