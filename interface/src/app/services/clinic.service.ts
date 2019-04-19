import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { Clinic } from "../models/clinic";

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
    return this.http.get<any>(this.endpointForListAll, this.httpOptions);
  }

  //method to get list of clinic
  public getList(_id: User): Observable<any> {
    return this.http.get<any>(this.endpoint + _id, this.httpOptions);
  }

  //method to get list of clinic
  public deleteList(_id: Clinic): Observable<any> {
    return this.http.delete<any>(
      this.endpointForDelete + _id,
      this.httpOptions
    );
  }

  public addList(clinic: Clinic): Observable<any> {
    return this.http.post<any>(this.endpointForListAll, this.httpOptions);
  }
}
