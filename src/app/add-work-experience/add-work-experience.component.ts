import { Component } from '@angular/core';
import {User} from "../services/user/user";
import {WorkExperience} from "../services/work-experience/work-experience";
import {Router} from "@angular/router";
import {WorkExperienceService} from "../services/work-experience/work-experience.service";


@Component({
  selector: 'app-add-work-experience',
  templateUrl: './add-work-experience.component.html',
  styleUrls: ['./add-work-experience.component.css']
})
export class AddWorkExperienceComponent {

  user: User = JSON.parse(localStorage.getItem("currentUser")!);

  constructor(private router : Router, private workExperienceService:WorkExperienceService){}

  jobTitle:string = "";
  companyName:string = "";
  startDate = "";
  endDate:string = "";
  description:string = "";
  location:string = "";

  roleIsCurrent:boolean = true;
  changeRoleIsCurrent() {
    this.roleIsCurrent = !this.roleIsCurrent;
    console.log(this.roleIsCurrent);
  }

  onSubmit() {
    if(this.roleIsCurrent) {
      this.endDate = "";
    }
    console.log(this.startDate);
    this.workExperienceService.createWorkExperience(new WorkExperience(this.jobTitle,
      this.companyName, this.startDate, this.endDate, this.description, this.location)).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/user/profile'])
          .then(() => {
            window.location.reload();
          });
      }
    );
  }

  cancelSubmit() {
    this.router.navigate(['/user/profile'])
      .then(() => {
        window.location.reload();
      });
  }

}
