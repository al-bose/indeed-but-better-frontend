import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JobListing} from "./jobListing";
import {User} from "../user/user";

@Injectable({
  providedIn: 'root'
})
export class JobListingService {

  baseUrl = environment.baseUrl;
  user: User = JSON.parse(localStorage.getItem('currentUser')!);

  constructor(private httpClient: HttpClient) { }

  getJobListings(page : number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "job-listings/page/" + page, { headers: headers, withCredentials: false})
  }

  createJobListing(jobListing : JobListing): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.post(environment.baseUrl + "job-listings/create", JSON.stringify(jobListing), { headers: headers, withCredentials: false, responseType: 'text' });
  }

  getJobListingsByCompanyId(companyId : number, page : number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "job-listings/companies/" + companyId + "/page/" + page, { headers: headers, withCredentials: false})
  }

  getJobListingsByUser(page : number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "job-listings/page/" + page + "/user",  { headers: headers, withCredentials: false})
  }

  searchJobs(query : String, page : number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "job-listings/search/" + query + "/page/" + page, { headers: headers, withCredentials: false})
  }

  searchJobsByUser(query : String, page : number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "job-listings/search/" + query + "/page/" + page + "/user", { headers: headers, withCredentials: false})
  }

}
