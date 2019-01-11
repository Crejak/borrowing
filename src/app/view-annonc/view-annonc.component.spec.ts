import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnnoncComponent } from './view-annonc.component';

describe('ViewAnnoncComponent', () => {
  let component: ViewAnnoncComponent;
  let fixture: ComponentFixture<ViewAnnoncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAnnoncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnnoncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
