import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor() { }

}
