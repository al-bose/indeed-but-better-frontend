import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FirstTimeSetupComponent } from './pages/first-time-setup/first-time-setup.component';
import {RouterLink} from "@angular/router";
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { AddEducationComponent } from './pages/add-education/add-education.component';



@NgModule({
  declarations: [
    LoginComponent,
    FirstTimeSetupComponent,
    UserProfileComponent,
    UserSettingsComponent,
    AddEducationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class UserModule { }
