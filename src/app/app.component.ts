import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component';

import { UtilService } from './util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor(private utilService: UtilService) {

  }

  ngOnInit() {
    this.title = this.utilService.getApplicationName();
  }

  triggerDevelopperMode() {
    this.utilService.triggerDevelopperMode();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === "KeyD") {
      this.triggerDevelopperMode();
    }
  }
}
