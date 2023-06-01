import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public signOutExternal = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    console.log("token deleted");
  }

  loginWithGoogle(credentials: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.baseUrl + "users/login-with-google", credentials, { headers: header, withCredentials: false });
  }
}
