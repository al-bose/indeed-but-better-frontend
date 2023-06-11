import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {WorkExperienceService} from "../../../services/work-experience/work-experience.service";
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../services/user/user";
import {WorkExperience} from "../../../services/work-experience/work-experience";

@Component({
  selector: 'app-add-work-experience',
  templateUrl: './add-work-experience.component.html',
  styleUrls: ['./add-work-experience.component.css']
})
export class AddWorkExperienceComponent {
  constructor(private router:Router,
              private userService:UserService,
              private workExperienceService:WorkExperienceService){}

  user:User = this.userService.getCurrentUser();

  jobTitle:string = "";
  companyName:string = "";
  startDate = "";
  endDate:string = "Present";
  description:string = "";
  location:string = "";

  roleIsCurrent:boolean = true;
  changeRoleIsCurrent() {
    this.roleIsCurrent = !this.roleIsCurrent;
    if(this.endDate === "Present") {
      this.endDate = "";
    } else {
      this.endDate = "Present"
    }
    console.log(this.roleIsCurrent);
  }

  onSubmit() {
    var workExperience = new WorkExperience();
    workExperience.jobTitle = this.jobTitle;
    workExperience.companyName = this.companyName;
    workExperience.startDate = this.startDate;
    workExperience.endDate = this.endDate;
    workExperience.description = this.description;
    workExperience.location = this.location;

    this.workExperienceService.createWorkExperience(workExperience).subscribe(
      response => {
        console.log(response);
        window.location.reload();
        }
    );
  }

  clear() {
    this.jobTitle = "";
    this.companyName = "";
    this.startDate = "";
    this.endDate = "";
    this.description = "";
    this.location = "";
  }

  cancelSubmit() {
    this.router.navigate(['/user/profile'])
      .then(() => {
        window.location.reload();
      });
  }
}
