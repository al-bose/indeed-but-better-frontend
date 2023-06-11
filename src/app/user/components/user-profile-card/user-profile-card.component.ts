import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../services/user/user";

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.css']
})
export class UserProfileCardComponent {

  constructor(private router: Router,
              private userService: UserService) {}

  user:User = this.userService.getCurrentUser();

}
