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
        for(let temp of response) {
          let edu = new Education(temp.universityName,temp.degreeType,temp.majorName,
            temp.graduationYear,temp.description);
          edu.educationId = temp.educationId;
          this.education.push(edu);
        }
      }
    );
    this.education.sort((a, b) => a.graduationYear.localeCompare(b.graduationYear));
  }

  onEditPage():boolean {
    return this.router.url === '/user/profile/edit-education';
  }

  anyEducationSelectedForDeletion():boolean {
    return this.education.some(item => item.isSelected);
  }

  deleteSelectedEducation() {
    for(let i = 0; i < this.education.length; i++) {
      if(this.education[i].isSelected) {
        this.educationService.deleteEducation(this.education[i]).subscribe(
          response => {
            console.log(response);
          }
        );
      }
    }
    window.location.reload();
  }

  ngOnInit() {
    this.getEducation();
  }

}
