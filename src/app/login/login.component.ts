import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import {AuthService} from "../services/auth/auth.service";
import {environment} from "../../environments/environments";
import {User} from "../services/user/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder,
              private router: Router,
              private service: AuthService,
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
    await this.service.loginWithGoogle(response.credential).subscribe(
      (user:User) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("currentUserName", user.name);
        localStorage.setItem("currentUserEmail", user.email);
        localStorage.setItem("currentUserPhoneNumber", user.phoneNumber);
        localStorage.setItem("currentUserPicture", user.userPicture);
        this._ngZone.run(() => {
          this.router.navigate(['/dashboard'])
            .then(() => {
              window.location.reload();
            });
        })},
      (error:any) => {
        console.log(error);
      }
    );
  }

}
