import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { Clinic } from "../models/clinic";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class DailyInfoService {
  constructor() {}
}
