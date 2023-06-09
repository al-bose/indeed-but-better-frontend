import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { JobListingsComponent } from './job-listings/job-listings.component';
import { UserProfileComponent } from './user/pages/user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompaniesComponent } from './companies/companies.component';
import { ApplicationsComponent } from './applications/applications.component';
import { CreateJobListingComponent } from './create-job-listing/create-job-listing.component';
import { FormsModule } from '@angular/forms';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { SharedModule } from "./shared/shared.module";
import { UserModule } from "./user/user.module";
import { LoginComponent } from "./user/pages/login/login.component";
import { FirstTimeSetupComponent } from "./user/pages/first-time-setup/first-time-setup.component";
import { UserSettingsComponent } from "./user/pages/user-settings/user-settings.component";
import { EditSkillsComponent } from "./user/pages/edit-skills/edit-skills.component";
import { EditWorkExperienceComponent } from "./user/pages/edit-work-experience/edit-work-experience.component";
import { EditEducationComponent } from "./user/pages/edit-education/edit-education.component";
import { NotificationsComponent } from "./user/pages/notifications/notifications.component";

@NgModule({
  declarations: [
    AppComponent,
    JobListingsComponent,
    DashboardComponent,
    CompaniesComponent,
    ApplicationsComponent,
    CreateJobListingComponent,
    CreateCompanyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'user/login', component: LoginComponent},
      {path: 'user/first-time-setup', component: FirstTimeSetupComponent},
      {path: 'user/profile', component: UserProfileComponent},
      {path: 'user/settings', component: UserSettingsComponent},
      {path: 'user/profile/edit-work-experience', component: EditWorkExperienceComponent},
      {path: 'user/profile/edit-education', component: EditEducationComponent},
      {path: 'user/profile/edit-skills', component: EditSkillsComponent},
      {path: 'user/notifications', component: NotificationsComponent},
      {path: 'job-listings', component: JobListingsComponent},
      {path: 'companies', component: CompaniesComponent},
      {path: 'applications', component: ApplicationsComponent},
      {path: 'create-job-listing', component: CreateJobListingComponent},
      {path: 'create-company', component: CreateCompanyComponent}
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
