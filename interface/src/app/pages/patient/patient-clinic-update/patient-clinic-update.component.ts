import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinic } from '../../../models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-patient-clinic-update',
  templateUrl: './patient-clinic-update.component.html',
  styleUrls: ['./patient-clinic-update.component.css']
})
export class PatientClinicUpdateComponent implements OnInit {
  clinicDetails: Clinic;
  private router: Router;

  constructor(private route: ActivatedRoute,
    private clinicService: ClinicService
    ) { }

  ngOnInit() {
    this.clinicDetails = new Clinic();
  }

  onSubmitPatientClinicUpdate(): void {
    this.clinicService.addList(this.clinicDetails).subscribe(data => {
      //console.log(data);
      //this.clinicDetails = data;
      this.router.navigate(['/nurse']);
    });

  }





}
