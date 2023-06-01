import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  createUserOnFirstLogin(email: string, name: string): Observable<any> {
    var headers = { 'content-type': 'application/json'};
    var body = JSON.stringify(new User(email, name));
    console.log('in createUserOnFirstLogin');
    return this.httpClient.post(environment.baseUrl + 'users/create', body, {'headers':headers, responseType: 'text'});
  }

  getCurrentUser(email:string): Observable<User> {
    console.log('in getCurrentUser');
    return this.httpClient.get<User>(this.baseUrl + 'users/' + email);
  }
}
