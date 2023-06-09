import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Company} from "./company";
import {User} from "../user/user";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  user: User = JSON.parse(localStorage.getItem('currentUser')!);
  constructor(private httpClient: HttpClient) { }

  getAllCompanies(): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "companies/all", { headers: headers, withCredentials: false})
  }

  createCompany(company : Company): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.post(environment.baseUrl + "companies/create", JSON.stringify(company), { headers: headers, withCredentials: false, responseType: 'text' });
  }

  searchCompanies(query : String, page : number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "companies/search/" + query + "/page/" + page, { headers: headers, withCredentials: false})
  }

  getPage(page : number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.get(environment.baseUrl + "companies/page/" + page, { headers: headers, withCredentials: false})
  }
}
