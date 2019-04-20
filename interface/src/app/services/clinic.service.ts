import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { Clinic } from "../models/clinic";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ClinicService {
  private endpointForListAll = "http://localhost:3000/api/nurse/clinic";
  private endpoint = "http://localhost:3000/api/nurse/clinic/patient/";
  private endpointForDelete = "http://localhost:3000/api/nurse/clinic/delete/";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    })
  };

  constructor(private http: HttpClient) {}

  //method to get list of clinic
  public getListAll(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + "/nurse/clinic");
  }

  //method to get list of clinic
  public getList(_id: string): Observable<any> {
    return this.http.get(
      environment.apiBaseUrl + "/nurse/clinic/patient/" + _id
    );
  }

  //method to get list of clinic
  public deleteList(_id: string): Observable<any> {
    return this.http.delete(environment.apiBaseUrl + "/nurse/clinic/" + _id);
  }

  public addList(clinic: Clinic): Observable<any> {
    return this.http.post<any>(
      environment.apiBaseUrl + "/nurse/clinic/",
      clinic
    );
  }

  public updateClinic(clinic: Clinic): Observable<any> {
    return this.http.post<any>(
      environment.apiBaseUrl + "/nurse/clinic/" + clinic._id,
      clinic
    );
  }
}
