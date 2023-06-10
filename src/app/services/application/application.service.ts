import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Application} from "./application";
import {User} from "../user/user";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  baseUrl = environment.baseUrl;
  user: User = JSON.parse(localStorage.getItem('currentUser')!);

  constructor(private httpClient: HttpClient) { }

  getAllApplications(): Observable<any> {
    var headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(environment.baseUrl + "applications/all", { headers: headers, withCredentials: false});
  }

  getApplicationsByJobListingId(jobListingId : number, page : number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "applications/job-listings/" + jobListingId + "/page/" + page, { headers: headers, withCredentials: false});
  }

  getApplicationsByUser(page : number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "applications/page/" + page + "/user", { headers: headers, withCredentials: false});
  }

  createApplication(application : Application, jobListingId: number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.post(environment.baseUrl + "applications/job-listings/" + jobListingId + "/create", JSON.stringify(application), { headers: headers, withCredentials: false, responseType: 'text' });
  }

  searchApplicationsByJobListingId(query : String, page : number, jobListingId : number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "applications/job-listings/" + jobListingId + "/search/" + query + "/page/" + page, { headers: headers, withCredentials: false})
  }
  searchApplicationsByUser(query : String, page : number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "applications/search/" + query + "/page/" + page, { headers: headers, withCredentials: false})
  }

}
