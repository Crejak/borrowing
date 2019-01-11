import { Component, OnInit } from '@angular/core';
import {UtilService} from '../util.service';
import {FormBuilder, Validators} from '@angular/forms';
import { CategoriesService, Categorie } from '../categories.service';
import {AnnoncesService} from '../annonces.service';
import {Annonce} from '../annonces.service';
import {Router} from '@angular/router';
import { User, UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  categories: Array<Categorie>;
  title: string;
  selectedFile : File;
  profileImage : string;
  annonce: Annonce;
  creationForm = this.formBuilder.group({
    titre: ['', Validators.required],
    categorie: ['', Validators.required],
    caution: ['', Validators.required],
    maxDuration: ['', Validators.required],
    description: ['']
  });
  user: User;

  constructor(private categoriesService: CategoriesService,
    private annonceService: AnnoncesService,
    private utilService: UtilService,
    private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.authenticationService.getLoggedInUser();
    this.categories = this.categoriesService.getAllCategories();
    this.title = this.utilService.getApplicationName();
    this.profileImage = "/assets/lol.png";
  }

  onFileUpload(event){
    console.log("a la con");
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.profileImage = <string>reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  onSubmit() {
    console.log("SUBMIT");
    console.log(this.creationForm.value);
    this.annonce = {
      id: null,
      idAnnouncer: this.user.id,
      titre: this.creationForm.value.titre,
      idCategorie: this.creationForm.value.categorie,
      caution: this.creationForm.value.caution,
      duree:  this.creationForm.value.maxDuration,
      description: this.creationForm.value.description,
      photo: this.profileImage,
      enCours: true,
      stars: 5
    };
    this.annonceService.addAnnonce(this.annonce);
    this.router.navigate(['/accueil']);
  }


}
