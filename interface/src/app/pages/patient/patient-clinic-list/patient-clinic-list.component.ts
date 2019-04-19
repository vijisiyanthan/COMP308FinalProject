import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinic } from '../../../models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-patient-clinic-list',
  templateUrl: './patient-clinic-list.component.html',
  styleUrls: ['./patient-clinic-list.component.css']
})
export class PatientClinicListComponent implements OnInit {
  clinic: Clinic;
  _id: Clinic;
  private router: Router;

  constructor(private route: ActivatedRoute,
    private clinicService: ClinicService,) { }

  ngOnInit() {
    this.clinic = new Clinic();

    //Get _id from params in order to get clinic data
    this.route.params.subscribe(params => {
      this._id = params._id;
    });

    this.displayClinic();
  }

  displayClinic(): void {
    this.clinicService.deleteList(this._id).subscribe(data => {
      //console.log(data);
      this.clinic = data;
      this.router.navigate(['/nurse']);
    });
  }

}
