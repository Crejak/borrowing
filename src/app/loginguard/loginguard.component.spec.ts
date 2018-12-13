import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginguardComponent } from './loginguard.component';

describe('LoginguardComponent', () => {
  let component: LoginguardComponent;
  let fixture: ComponentFixture<LoginguardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginguardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
