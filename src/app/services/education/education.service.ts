import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {User} from "../user/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Education} from "./education";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  baseUrl = environment.baseUrl;
  user: User = JSON.parse(localStorage.getItem('currentUser')!);


  constructor(private httpClient: HttpClient) { }

  getEducationForUser(): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });

    return this.httpClient.get(environment.baseUrl + "education/find-by-user", { headers: headers, withCredentials: false});
  }

  createEducation(education:Education): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.post(environment.baseUrl + "education/add-to-user", JSON.stringify(education), { headers: headers, withCredentials: false, responseType: 'text'});
  }

  deleteEducation(education:Education): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });

    return this.httpClient.delete(environment.baseUrl + `education/delete/${education.educationId}`, { headers: headers, withCredentials: false, responseType: 'text'});
  }

  updateEducation(education:Education): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.post(environment.baseUrl + "education/update", JSON.stringify(education), { headers: headers, withCredentials: false, responseType: 'text'});
  }
}
