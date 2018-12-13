import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component';

import { UtilService } from './util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private utilService: UtilService) {

  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === "F6") {
      this.utilService.developperMode = ! this.utilService.developperMode;
    }
  }
}
