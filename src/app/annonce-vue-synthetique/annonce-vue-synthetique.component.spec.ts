import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceVueSynthetiqueComponent } from './annonce-vue-synthetique.component';

describe('AnnonceVueSynthetiqueComponent', () => {
  let component: AnnonceVueSynthetiqueComponent;
  let fixture: ComponentFixture<AnnonceVueSynthetiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceVueSynthetiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceVueSynthetiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
