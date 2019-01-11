import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceVueSynthetiqueSupprimerComponent } from './annonce-vue-synthetique-supprimer.component';

describe('AnnonceVueSynthetiqueSupprimerComponent', () => {
  let component: AnnonceVueSynthetiqueSupprimerComponent;
  let fixture: ComponentFixture<AnnonceVueSynthetiqueSupprimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceVueSynthetiqueSupprimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceVueSynthetiqueSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
