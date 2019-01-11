import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationApplicantComponent } from './evaluation-applicant.component';

describe('EvaluationApplicantComponent', () => {
  let component: EvaluationApplicantComponent;
  let fixture: ComponentFixture<EvaluationApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
