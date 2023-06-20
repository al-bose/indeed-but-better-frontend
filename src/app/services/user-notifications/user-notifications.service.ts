import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "../user/user.service";
import {User} from "../user/user";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Skill} from "../skill/skill";
import {UserNotification} from "./user-notification";

@Injectable({
  providedIn: 'root'
})
export class UserNotificationsService {

  constructor(private httpClient:HttpClient,
              private userService:UserService) { }

  user: User = this.userService.getCurrentUser();

  getNotificationsForUser(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });

    return this.httpClient.get(environment.baseUrl + "user-notifications/by-user", { headers: headers, withCredentials: false});
  }

  updateUserNotification(userNotification:UserNotification):Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.post(environment.baseUrl + 'user-notifications/update/', JSON.stringify(userNotification), { headers: headers, withCredentials: false, responseType: 'text'});
  }
  

  deleteUserNotification(userNotification:UserNotification): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.jwt}`,
      'Accept': "*/*"
    });

    return this.httpClient.delete(environment.baseUrl + `user-notifications/delete/${userNotification.userNotificationId}`, { headers: headers, withCredentials: false, responseType: 'text'});
  }
}
