import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environments";
import {User} from "../user/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

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
}
