import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientClinicListComponent } from './patient-clinic-list.component';

describe('PatientClinicListComponent', () => {
  let component: PatientClinicListComponent;
  let fixture: ComponentFixture<PatientClinicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientClinicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientClinicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
