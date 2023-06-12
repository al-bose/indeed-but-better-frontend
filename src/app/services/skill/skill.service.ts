import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {User} from "../user/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Skill} from "./skill";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httpClient:HttpClient,
              private userService:UserService) { }

  user: User = this.userService.getCurrentUser();

  getSkillsForUser(): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });

    return this.httpClient.get(environment.baseUrl + "skills/find-by-user", { headers: headers, withCredentials: false});
  }

  createSkill(skill:Skill): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.post(environment.baseUrl + "skills/add-to-user", JSON.stringify(skill), { headers: headers, withCredentials: false, responseType: 'text'});
  }

  deleteSkill(skill:Skill): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });

    return this.httpClient.delete(environment.baseUrl + `skills/delete/${skill.skillId}`, { headers: headers, withCredentials: false, responseType: 'text'});
  }

}
