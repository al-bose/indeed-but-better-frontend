import { Component } from '@angular/core';
import {User} from "../services/user/user";
import {Router} from "@angular/router";
import {UserService} from "../services/user/user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user: User = JSON.parse(localStorage.getItem('currentUser')!);

  constructor(private router: Router, private userService: UserService) {}

}
