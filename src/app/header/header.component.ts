import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;

  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.title = this.utilService.getApplicationName();
  }

}
