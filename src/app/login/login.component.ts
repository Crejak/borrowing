import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string;

  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.title = this.utilService.getApplicationName();
  }

}
