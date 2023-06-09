import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;
  user: User = JSON.parse(localStorage.getItem('currentUser')!);

  constructor(private httpClient: HttpClient) { }

  public getCurrentUser():User {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  public signOutExternal = () => {
    localStorage.clear();
    console.log("local storage cleared");
  }

  loginWithGoogle(credentials: string): Observable<any> {
    var headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(environment.baseUrl + "users/login-with-google", credentials, { headers: headers, withCredentials: false });
  }

  updateUser(updatedUser:User): Observable<any> {
    localStorage.setItem("currentUser",JSON.stringify(updatedUser));
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${updatedUser.jwt}`,
      'Accept': "*/*"
    });
    return this.httpClient.post(environment.baseUrl + "users/update", JSON.stringify(updatedUser), { headers: headers, withCredentials: false, responseType: 'text'});
  }

}
