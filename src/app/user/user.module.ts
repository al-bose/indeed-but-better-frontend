import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FirstTimeSetupComponent } from './pages/first-time-setup/first-time-setup.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { EditSkillsComponent } from './pages/edit-skills/edit-skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { UserProfileCardComponent } from './components/user-profile-card/user-profile-card.component';
import { EditEducationComponent } from './pages/edit-education/edit-education.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EditWorkExperienceComponent } from './pages/edit-work-experience/edit-work-experience.component';
import {AddWorkExperienceComponent} from "./components/add-work-experience/add-work-experience.component";
import {AddEducationComponent} from "./components/add-education/add-education.component";
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SelectedNotificationComponent } from './components/selected-notification/selected-notification.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';


@NgModule({
  declarations: [
    LoginComponent,
    FirstTimeSetupComponent,
    UserProfileComponent,
    UserSettingsComponent,
    AddWorkExperienceComponent,
    EditSkillsComponent,
    WorkExperienceComponent,
    UserProfileCardComponent,
    EditEducationComponent,
    EducationComponent,
    SkillsComponent,
    EditWorkExperienceComponent,
    EditEducationComponent,
    AddEducationComponent,
    AddSkillComponent,
    NotificationsComponent,
    SelectedNotificationComponent,
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class UserModule { }
