import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../services/user/user";
import {UserService} from "../services/user/user.service";

@Component({
  selector: 'app-first-time-user-setup',
  templateUrl: './first-time-user-setup.component.html',
  styleUrls: ['./first-time-user-setup.component.css']
})
export class FirstTimeUserSetupComponent {

  user: User = JSON.parse(localStorage.getItem("currentUser")!);
  constructor(private router: Router, private userService: UserService) {}

  async setUserType(userType: string) {
    this.user.userType = userType;
    await this.userService.updateUser(this.user).subscribe(
      (x:any) => {
        console.log(x);
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

}
