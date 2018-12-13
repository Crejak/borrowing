import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  title : string;
  creationForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    password: [''],
    confirmPassword: ['']
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
  }

}
