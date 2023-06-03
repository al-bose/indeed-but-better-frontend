import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import {environment} from "../../environments/environments";
import {User} from "../services/user/user";
import {UserService} from "../services/user/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private _ngZone: NgZone) {}

  private clientId = environment.clientId;

  ngOnInit(): void {

    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: this.clientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      // @ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", width: "100%" }
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };
  }

  async handleCredentialResponse(response: CredentialResponse) {
    await this.userService.loginWithGoogle(response.credential).subscribe(
      (user:User) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        if(user.userType) {
          this.router.navigate(['/dashboard'])
            .then(() => {
              window.location.reload();
            });
        } else {
          this.router.navigate(['/first-time-user-setup'])
            .then(() => {
              window.location.reload();
            });
        }
        },
      (error:any) => {
        console.log(error);
      }
    );
  }

}
