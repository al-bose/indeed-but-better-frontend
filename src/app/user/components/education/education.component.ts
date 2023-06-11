import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user/user.service";
import {EducationService} from "../../../services/education/education.service";
import {User} from "../../../services/user/user";
import {Education} from "../../../services/education/education";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  constructor(private router: Router,
              private userService: UserService,
              private educationService:EducationService) {}

  user:User = this.userService.getCurrentUser();
  education: Education[] = [];

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

  ngOnInit() {
    this.getEducation();
  }

}
