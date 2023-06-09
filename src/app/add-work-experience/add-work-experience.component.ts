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

  model : WorkExperience = new WorkExperience("","","","","","");

  onSubmit() {
    this.workExperienceService.createWorkExperience(this.model).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
