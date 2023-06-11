import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {User} from "../user/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {WorkExperience} from "./work-experience";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

 constructor(private httpClient: HttpClient, private userService:UserService) { }
  user: User = this.userService.getCurrentUser();
  baseUrl = environment.baseUrl;

  getWorkExperienceForUser(): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });

    return this.httpClient.get(environment.baseUrl + "work-experience/find-by-user", { headers: headers, withCredentials: false});
  }

  createWorkExperience(workExperience:WorkExperience): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.post(environment.baseUrl + "work-experience/add-to-user", JSON.stringify(workExperience), { headers: headers, withCredentials: false, responseType: 'text'});
  }
}
