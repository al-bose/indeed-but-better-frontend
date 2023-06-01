import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule } from "@angular/router";
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  GoogleSigninButtonModule
} from '@abacritt/angularx-social-login';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MaterialModule } from "./material/material.module";
import { JobListingsComponent } from './job-listings/job-listings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    LogoutComponent,
    JobListingsComponent,
    UserProfileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'job-listings', component: JobListingsComponent}
    ]),
    BrowserAnimationsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    MaterialModule
  ],
  providers: [{
    provide:'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('583369200281-ubok9tafv7bf6rm259jhklq30clh2fbs.apps.googleusercontent.com')
        }
      ]
    } as SocialAuthServiceConfig,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
