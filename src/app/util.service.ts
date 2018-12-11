import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getApplicationName(): string {
    return "BorroWing";
  }
}
