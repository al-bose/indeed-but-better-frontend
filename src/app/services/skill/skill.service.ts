import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environments";
import {User} from "../user/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Skill} from "./skill";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  baseUrl = environment.baseUrl;
  user: User = JSON.parse(localStorage.getItem('currentUser')!);

  constructor(private httpClient: HttpClient) { }

  getSkillsForUser(): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });

    return this.httpClient.get(environment.baseUrl + "skills/find-by-user", { headers: headers, withCredentials: false});
  }

  updateSkillsForUser(skills:Skill[]) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    console.log(headers);
    return this.httpClient.post(environment.baseUrl + "skills/update-by-user",JSON.stringify(skills), { headers: headers, withCredentials: false, responseType: 'text'});
  }


}
