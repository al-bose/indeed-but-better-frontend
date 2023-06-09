import { Injectable } from '@angular/core';
import {Skill} from "./skill";
import {environment} from "../../../environments/environments";
import {User} from "../user/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

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
}
