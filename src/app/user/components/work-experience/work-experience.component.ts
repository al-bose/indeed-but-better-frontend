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
          this.workExperience.push(new WorkExperience(experience.jobTitle,experience.companyName,experience.startDate,
            experience.endDate,experience.description,experience.location));
        }
      }
    );
    this.workExperience.sort((a,b) => a.rawEndDate.getTime() - b.rawEndDate.getTime());
  }

  ngOnInit(): void {
    this.getWorkExperience();
  }

}
