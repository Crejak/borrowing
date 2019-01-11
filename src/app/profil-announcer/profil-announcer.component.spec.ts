import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAnnouncerComponent } from './profil-announcer.component';

describe('ProfilAnnouncerComponent', () => {
  let component: ProfilAnnouncerComponent;
  let fixture: ComponentFixture<ProfilAnnouncerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilAnnouncerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilAnnouncerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
