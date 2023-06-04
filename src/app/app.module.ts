import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import { MaterialModule } from "./material/material.module";
import { JobListingsComponent } from './job-listings/job-listings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompaniesComponent } from './companies/companies.component';
import { ApplicationsComponent } from './applications/applications.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { FirstTimeUserSetupComponent } from './first-time-user-setup/first-time-user-setup.component';
import { CreateJobListingComponent } from './create-job-listing/create-job-listing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobListingsComponent,
    UserProfileComponent,
    DashboardComponent,
    CompaniesComponent,
    ApplicationsComponent,
    NotificationsComponent,
    UserSettingsComponent,
    FirstTimeUserSetupComponent,
    CreateJobListingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'login', component: LoginComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'job-listings', component: JobListingsComponent},
      {path: 'companies', component: CompaniesComponent},
      {path: 'applications', component: ApplicationsComponent},
      {path: 'notifications', component: NotificationsComponent},
      {path: 'settings', component: UserSettingsComponent},
      {path: 'first-time-user-setup', component: FirstTimeUserSetupComponent},
      {path: 'create-job-listing', component: CreateJobListingComponent}
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
