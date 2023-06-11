import { Component } from '@angular/core';
import { UserService } from "../../../services/user/user.service";
import { Router } from "@angular/router";
import { WorkExperienceService } from "../../../services/work-experience/work-experience.service";
import { WorkExperience } from "../../../services/work-experience/work-experience";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  constructor(private userService:UserService,
              private router: Router,
              private workExperienceService:WorkExperienceService) {}

  workExperience: WorkExperience[] = [];

  getWorkExperience() {
    this.workExperienceService.getWorkExperienceForUser().subscribe(
      response => {
        for(var experience of response) {
          var workExperience = new WorkExperience();
          workExperience.workExperienceId = experience.workExperienceId;
          workExperience.jobTitle = experience.jobTitle;
          workExperience.companyName = experience.companyName;
          workExperience.startDate = experience.startDate;
          workExperience.endDate = experience.endDate;
          workExperience.description = experience.description;
          workExperience.location = experience.location;
          this.workExperience.push(workExperience);
        }
      }
    );
    this.workExperience.sort((a,b) => a.rawEndDate.getTime() - b.rawEndDate.getTime());
  }

  anyWorkExperienceSelectedForDeletion():boolean {
    return this.workExperience.some(item => item.isSelected);
  }

  deleteSelectedWorkExperience() {
    for(let i = 0; i < this.workExperience.length; i++) {
      if(this.workExperience[i].isSelected) {
        this.workExperienceService.deleteWorkExperience(this.workExperience[i]).subscribe(
          response => {
            console.log(response);
          }
        );
      }
    }
    window.location.reload();
  }

  onEditPage():boolean {
    return this.router.url === '/user/profile/edit-work-experience';
  }

  ngOnInit(): void {
    this.getWorkExperience();
  }

}
