import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public developperMode: boolean = true;

  constructor() { }

  getApplicationName(): string {
    return "BorroWing";
  }
}
