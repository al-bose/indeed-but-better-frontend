import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "../user/user.service";
import {User} from "../user/user";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Notif} from "./notif";

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor(private httpClient:HttpClient,
              private userService:UserService) { }

  user: User = this.userService.getCurrentUser();

  createNotification(notification:Notif): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.post(environment.baseUrl + "notifications/create", JSON.stringify(notification), { headers: headers, withCredentials: false, responseType: 'text'});
  }
}
