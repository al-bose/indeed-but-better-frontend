import { Component } from '@angular/core';
import {User} from "../services/user/user";
import {Router} from "@angular/router";
import {UserService} from "../services/user/user.service";
import {Skill} from "../services/skill/skill";
import {SkillService} from "../services/skill/skill.service";
import {WorkExperienceService} from "../services/work-experience/work-experience.service";
import {WorkExperience} from "../services/work-experience/work-experience";
import {EducationService} from "../services/education/education.service";
import {Education} from "../services/education/education";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user: User = JSON.parse(localStorage.getItem('currentUser')!);
  skills: Skill[] = [];
  workExperience: WorkExperience[] = [];
  education: Education[] = [];

  constructor(private router: Router,
              private userService: UserService,
              private skillService:SkillService,
              private workExperienceService:WorkExperienceService,
              private educationService:EducationService) {}

  getSkills() {
    this.skillService.getSkillsForUser().subscribe(
      response => {
        for(var temp of response) {
          this.skills.push(new Skill(temp.skillName));
        }
      }
    );
  }

  getWorkExperience() {
    this.workExperienceService.getWorkExperienceForUser().subscribe(
      response => {
        for(var temp of response) {
          this.workExperience.push(new WorkExperience(temp.jobTitle,temp.companyName,temp.startDate,
            temp.endDate,temp.description,temp.location));
        }
      }
    );
    this.workExperience.sort((a,b) => a.rawEndDate.getTime() - b.rawEndDate.getTime());
  }

  getEducation() {
    this.educationService.getEducationForUser().subscribe(
      response => {
        for(var temp of response) {
          this.education.push(new Education(temp.universityName,temp.degreeType,temp.majorName,
            temp.graduationYear,temp.description));
        }
      }
    );
    this.education.sort((a, b) => a.graduationYear.localeCompare(b.graduationYear));
  }

  ngOnInit(): void {
    this.getSkills();
    this.getWorkExperience();
    this.getEducation();
  }

}
