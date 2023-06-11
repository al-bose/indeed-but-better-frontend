import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user/user.service";
import {SkillService} from "../../../services/skill/skill.service";
import {User} from "../../../services/user/user";
import {Skill} from "../../../services/skill/skill";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor(private router: Router,
              private userService: UserService,
              private skillService:SkillService) {}

  user:User = this.userService.getCurrentUser();
  skills: Skill[] = [];

  getSkills() {
    this.skillService.getSkillsForUser().subscribe(
      response => {
        for(var temp of response) {
          this.skills.push(new Skill(temp.skillName));
        }
      }
    );
  }

  ngOnInit() {
    this.getSkills();
  }

}
