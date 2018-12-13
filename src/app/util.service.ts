import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private developperMode: boolean = true;
  private developperModeSub: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.developperModeSub.next(this.developperMode);
  }

  getApplicationName(): string {
    return "BorroWing";
  }

  triggerDevelopperMode() {
    this.developperMode = ! this.developperMode;
    this.developperModeSub.next(this.developperMode);
  }

  getDevelopperMode() {
    return this.developperModeSub;
  }
}
