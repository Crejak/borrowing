import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Annonce, AnnoncesService } from '../annonces.service';
import { User, UserService } from '../user.service';
import { FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFontAwesomeComponent } from 'angular-font-awesome';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  annonce: Annonce;
  contact: User;
  self: User;
  message: string;
  messageForm: any;
  error: string;

  constructor(private authenticationService: AuthenticationService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private annoncesService: AnnoncesService,
    private userService: UserService) { 
      this.messageForm = this.formBuilder.group({
        idSender: [''],
        idContact: [''],
        message: ['', Validators.required],
      })
    }

  ngOnInit() {
    let idAnnonce = this.route.snapshot.paramMap.get('id');
    this.annonce = this.annoncesService.getAnnonceParId(+idAnnonce);
    this.contact = this.userService.getUser(this.annonce.idAnnouncer);
    this.self = this.authenticationService.getLoggedInUser();
  }

  onSubmit() {
    console.log(this.messageForm.controls.message.status);
    console.log(this.messageForm.value.message);
    if(this.messageForm.controls.message.status==="INVALID"){
      this.error = "Veuillez remplir le message à envoyer";
    }
    else{
      this.messageForm.value.idSender = this.self.id;
      this.messageForm.value.idContact = this.contact.id;
      this.router.navigate(['/accueil/2']);
    }
  }

}
