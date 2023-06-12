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
          let skill = new Skill(temp.skillName);
          skill.skillId = temp.skillId;
          this.skills.push(skill);
        }
      }
    );
  }

  deleteSelectedSkills() {
    for(let i = 0; i < this.skills.length; i++) {
      if(this.skills[i].isSelected) {
        this.skillService.deleteSkill(this.skills[i]).subscribe(
          response => {
            console.log(response);
          }
        );
      }
    }
    window.location.reload();
  }

  onEditPage():boolean {
    return this.router.url === '/user/profile/edit-skills';
  }

  toggleSkillSelected(index:number) {
    if(this.onEditPage()) {
      this.skills[index].isSelected = !this.skills[index].isSelected;
    }
  }

  anySkillsSelectedForDeletion():boolean {
    return this.skills.some(item => item.isSelected);
  }

  ngOnInit() {
    this.getSkills();
  }

}
