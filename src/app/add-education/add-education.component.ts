import { Component } from '@angular/core';
import {Education} from "../services/education/education";
import {Router} from "@angular/router";
import {EducationService} from "../services/education/education.service";
import {User} from "../services/user/user";

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent {

  user: User = JSON.parse(localStorage.getItem("currentUser")!);

  constructor(private router : Router, private educationService:EducationService){}

  model:Education = (new Education("","","","",""));

  onSubmit() {
    this.educationService.createEducation(this.model).subscribe(
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
