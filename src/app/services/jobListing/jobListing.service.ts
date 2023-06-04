import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobListingService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAllJobListings(): Observable<any> {
    var headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(environment.baseUrl + "job-listings/all", { headers: headers, withCredentials: false})
  }

}
