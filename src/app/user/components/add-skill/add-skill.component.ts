import { Component } from '@angular/core';
import {Skill} from "../../../services/skill/skill";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user/user.service";
import {SkillService} from "../../../services/skill/skill.service";
import {Education} from "../../../services/education/education";

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {

  constructor(private router:Router,
              private userService:UserService,
              private skillService:SkillService) {
  }

  skills:Skill[] = [];

  model:Skill = new Skill("");

  onSubmit() {
    if(!this.skills.some(item => item.skillName === this.model.skillName)) {
      this.model.sortIndex = -1;
      this.skillService.createSkill(this.model).subscribe(
        response => {
          console.log(response);
          window.location.reload();
        }
      );
    } else {
      this.clear();
      console.log("User already has skill with that name");
    }
  }

  clear() {
    this.model = new Skill("");
  }

  getSkills() {
    this.skillService.getSkillsForUser().subscribe(
      response => {
        for(let temp of response) {
          let skill = new Skill(temp.skillName);
          skill.skillId = temp.skillId;
          skill.sortIndex = temp.sortIndex;
          this.skills.push(skill);
        }
      }
    );
  }

  ngOnInit() {
    this.getSkills();
  }

}
