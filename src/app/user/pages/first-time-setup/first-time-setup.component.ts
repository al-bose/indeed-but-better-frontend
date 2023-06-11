import { Component } from '@angular/core';
import { User } from "../../../services/user/user";
import { Router } from "@angular/router";
import { UserService } from "../../../services/user/user.service";

@Component({
  selector: 'app-first-time-setup',
  templateUrl: './first-time-setup.component.html',
  styleUrls: ['./first-time-setup.component.css']
})
export class FirstTimeSetupComponent {

  user: User = JSON.parse(localStorage.getItem("currentUser")!);
  constructor(private router: Router, private userService: UserService) {}

  setUserType(userType: string) {
    this.user.userType = userType;
    this.userService.updateUser(this.user).subscribe(
      response => {
        console.log(response);
        localStorage.setItem("currentUser", JSON.stringify(this.user));
      }
    );
  }

}
