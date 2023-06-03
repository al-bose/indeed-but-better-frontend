import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public signOutExternal = () => {
    localStorage.clear();
    console.log("local storage cleared");
  }

  loginWithGoogle(credentials: string): Observable<any> {
    var headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(environment.baseUrl + "users/login-with-google", credentials, { headers: headers, withCredentials: false });
  }

  updateUser(user:User): Observable<any> {
    var headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(environment.baseUrl + "users/update", JSON.stringify(user), { headers: headers, withCredentials: false, responseType: 'text' });
  }

}
