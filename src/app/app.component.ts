import { Component } from '@angular/core';
import { User } from "./services/user/user";
import {Router} from "@angular/router";
import {AuthService} from "./services/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser: User = JSON.parse(localStorage.getItem('currentUser')!);
  currentUserPicture: String = localStorage.getItem('currentUserPicture')!;

  displayUserMenu = false;
  toggleUserMenu() {
    this.displayUserMenu = !this.displayUserMenu;
    console.log(this.displayUserMenu);
  }

  constructor(private router: Router, private service: AuthService) {}

  navigateToLoginPage() {
    this.router.navigate(['/login'])
      .then(() => {
        window.location.reload();
      });
  }
  logout() {
    this.service.signOutExternal();
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
