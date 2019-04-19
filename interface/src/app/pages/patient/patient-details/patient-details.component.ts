import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Clinic } from "../../../models/clinic";
import { ClinicService } from "src/app/services/clinic.service";
import { User } from "../../../models/user";

@Component({
  selector: "app-patient-details",
  templateUrl: "./patient-details.component.html",
  styleUrls: ["./patient-details.component.css"]
})
export class PatientDetailsComponent implements OnInit {
  clinicDetails: Array<Clinic>;
  _id: User;

  //title: String;

  constructor(
    private route: ActivatedRoute,
    private clinicService: ClinicService
  ) {}

  ngOnInit() {
    //this.title = this.route.snapshot.data.title;

    //Get _id from params in order to get clinic data
    this.route.params.subscribe(params => {
      this._id = params._id;
    });

    this.displayClinic();
  }

  displayClinic(): void {
    this.clinicService.getList(this._id).subscribe(data => {
      //console.log(data);
      this.clinicDetails = data;
    });
  }
}
