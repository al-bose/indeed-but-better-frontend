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
import { NotificationsComponent } from './notifications/notifications.component';
import { CreateJobListingComponent } from './create-job-listing/create-job-listing.component';
import { FormsModule } from '@angular/forms';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { AddWorkExperienceComponent } from './user/pages/add-work-experience/add-work-experience.component';
import { AddEducationComponent } from './user/pages/add-education/add-education.component';
import { SharedModule } from "./shared/shared.module";
import { UserModule } from "./user/user.module";
import { LoginComponent } from "./user/pages/login/login.component";
import { FirstTimeSetupComponent } from "./user/pages/first-time-setup/first-time-setup.component";
import { UserSettingsComponent } from "./user/pages/user-settings/user-settings.component";
import { EditSkillsComponent } from "./user/pages/edit-skills/edit-skills.component";

@NgModule({
  declarations: [
    AppComponent,
    JobListingsComponent,
    DashboardComponent,
    CompaniesComponent,
    ApplicationsComponent,
    NotificationsComponent,
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
      {path: 'user/profile/add-education', component: AddEducationComponent},
      {path: 'user/profile/add-work-experience', component: AddWorkExperienceComponent},
      {path: 'user/profile/edit-skills', component: EditSkillsComponent},
      {path: 'job-listings', component: JobListingsComponent},
      {path: 'companies', component: CompaniesComponent},
      {path: 'applications', component: ApplicationsComponent},
      {path: 'notifications', component: NotificationsComponent},
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
