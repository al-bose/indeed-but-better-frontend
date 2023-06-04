import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environments";
import {Company} from "./company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getAllCompanies(): Observable<any> {
    var headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(environment.baseUrl + "companies/all", { headers: headers, withCredentials: false})
  }

  createCompany(company : Company): Observable<any> {
    var headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(environment.baseUrl + "companies/create", JSON.stringify(company), { headers: headers, withCredentials: false, responseType: 'text' });
  }
}
