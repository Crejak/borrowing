import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationAdvertiserComponent } from './evaluation-advertiser.component';

describe('EvaluationAdvertiserComponent', () => {
  let component: EvaluationAdvertiserComponent;
  let fixture: ComponentFixture<EvaluationAdvertiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationAdvertiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationAdvertiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
