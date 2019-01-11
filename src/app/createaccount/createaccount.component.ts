import { Component, OnInit} from '@angular/core';
import { UtilService } from '../util.service';
import { FormBuilder, Validators} from '@angular/forms';
import { UserService, User } from '../user.service';
import { AuthenticationService, UserAccount } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  title : string;
  profileImage : string;
  selectedFile : File;
  creationForm : any;
  user : User;
  userAccount : UserAccount;
  error : string;

  constructor(
    private utilService: UtilService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router) {
      this.creationForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        profilePicture: ['']
      });
    }

    ngOnInit() {
      this.title = this.utilService.getApplicationName();
      this.profileImage = "/assets/addImage.png";
    }
  
    onSubmit() {
      this.creationForm.value.profilePicture = this.profileImage;
      if (this.creationFormStatus()==="INVALID") {
        this.error = "Veuillez remplir tous les champs";
      }
      else if(this.emailValidator()==="INVALID"){
        this.error = "Le format du champ \"Adresse mail\" est erroné";
      }
      else if(this.passwordValidator()==="INVALID"){
        this.error = "Confirmation erronée du mot de passe";
      }
      else{
        this.user = new User(this.creationForm.value.firstName, 
          this.creationForm.value.lastName, 
          this.creationForm.value.email, 
          this.creationForm.value.profilePicture);
        this.userService.addUser(this.user);
        this.userAccount = new UserAccount(this.creationForm.value.password, this.user.id);
        this.authenticationService.addAccount(this.userAccount);
        console.log(this.authenticationService.accounts);
        console.log(this.userService.users);
        this.router.navigate(['/login/2']);
      }
    }

    onFileUpload(event){
        this.selectedFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
        this.profileImage = <string>reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }

    creationFormStatus(): string{
      if(this.creationForm.controls.lastName.status==="INVALID" || 
      this.creationForm.controls.firstName.status==="INVALID" ||
      this.creationForm.controls.email.status==="INVALID" ||
      this.creationForm.controls.password.status==="INVALID"){
        return "INVALID"
      }
      return "VALID";
    }

    emailValidator(): string {
      if (this.creationForm.value.email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
          return "VALID";
      } else {
          return "INVALID"
      }
    }

    passwordValidator(): string{
      if(this.creationForm.value.password !== this.creationForm.value.confirmPassword){
        return "INVALID";
      }
      return "VALID";
    }
}
