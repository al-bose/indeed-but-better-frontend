import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {EducationService} from "../../../services/education/education.service";
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../services/user/user";
import {Education} from "../../../services/education/education";

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent {

  constructor(private router:Router,
              private userService:UserService,
              private educationService:EducationService){}
  user:User = this.userService.getCurrentUser();

  model:Education = new Education("","","","","");

  onSubmit() {
    this.model.sortIndex = -1;
    this.educationService.createEducation(this.model).subscribe(
      response => {
        console.log(response);
        window.location.reload();
      }
    );
  }

  clear() {
    this.model = new Education("","","","","");
  }

  cancelSubmit() {
    this.router.navigate(['/user/profile'])
      .then(() => {
        window.location.reload();
      });
  }
}
