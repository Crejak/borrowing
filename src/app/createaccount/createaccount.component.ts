import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  title : string;

  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.title = this.utilService.getApplicationName();
  }

}
