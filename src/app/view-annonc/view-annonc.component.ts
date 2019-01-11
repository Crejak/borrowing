import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../annonces.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-annonc',
  templateUrl: './view-annonc.component.html',
  styleUrls: ['./view-annonc.component.css']
})
export class ViewAnnoncComponent implements OnInit {

  @Input('annonce') annonce: Annonce;
  @Input('onDelete') onDelete?: (an: Annonce) => void;
  @Input('onUndelete') onUndelete?: (an: Annonce) => void;
  @Input('canModify') canModify: boolean;

  constructor(
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log('annonce :');
    console.log(this.annonce);
  }

  clickDelete() {
    console.log('click sur delete');
    this.onDelete(this.annonce);
  }

  clickUndelete() {
    console.log('click sur undelete');
    this.onUndelete(this.annonce);
  }

  getStarsStyle() {
    if (this.annonce === null || this.annonce === undefined) {
      this.domSanitizer.bypassSecurityTrustStyle('width: 0%;');
    }
    const stars = this.annonce.stars / 5.0 * 100;
    const style = 'width: ' + stars + '%;';
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }
}
