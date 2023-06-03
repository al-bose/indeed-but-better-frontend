import { Component } from '@angular/core';
import { User } from "./services/user/user";
import {Router} from "@angular/router";
import {UserService} from "./services/user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = JSON.parse(localStorage.getItem('currentUser')!);

  displayUserMenu = false;
  toggleUserMenu() {
    this.displayUserMenu = !this.displayUserMenu;
    console.log(this.displayUserMenu);
  }

  constructor(private router: Router, private userService: UserService) {}

  navigateToLoginPage() {
    this.router.navigate(['/login'])
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

  navigateToNotifications() {
    this.router.navigate(['/notifications'])
      .then(() => {
        window.location.reload();
      });
  }

  ngOnInit() {}

  title = 'indeed-but-better-frontend';

}
