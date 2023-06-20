import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../../services/user/user.service";
import {User} from "../../../services/user/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private userService: UserService) {}

  user: User = JSON.parse(localStorage.getItem('currentUser')!);

  displayUserMenu = false;
  toggleUserMenu() {
    this.displayUserMenu = !this.displayUserMenu;
    console.log(this.displayUserMenu);
  }

  navigateToLoginPage() {
    this.router.navigate(['/user/login'])
      .then(() => {
        window.location.reload();
      });
  }
  logout() {
    this.userService.signOutExternal();
    this.router.navigate(['/dashboard'])
      .then(() => {
        window.location.reload();
      });
  }
}
