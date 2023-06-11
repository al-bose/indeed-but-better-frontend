import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SkillService} from "../../../services/skill/skill.service";
import {Skill} from "../../../services/skill/skill";
import {User} from "../../../services/user/user";

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent {

  user: User = JSON.parse(localStorage.getItem('currentUser')!);

  constructor(private router:Router, private skillService:SkillService) { }

  skills: Skill[] = [];

  addSkill:boolean = false;
  newSkillName:string = "";

  toggleAddSkill() {
    this.addSkill = !this.addSkill;
  }


  getSkills() {
    this.skillService.getSkillsForUser().subscribe(
      response => {
        for(var temp of response) {
          this.skills.push(new Skill(temp.skillName));
        }
      }
    );
  }

  addNewSkill() {
    this.skills.push(new Skill(this.newSkillName));
    this.newSkillName = "";
    this.addSkill = false;
  }

  deleteSelectedSkills() {
    this.skills = this.skills.filter(skill => !(skill.isSelected));
  }

  clearNewSkill() {
    this.newSkillName = "";
    this.addSkill = false;
  }

  toggleSelectSkill(skill:Skill, index:number) {
    this.skills[index].isSelected = !this.skills[index].isSelected;
  }

  updateSkills() {
    this.skillService.updateSkillsForUser(this.skills).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/user/profile'])
          .then(() => {
            window.location.reload();
          });
      }
    );
  }

  ngOnInit(): void {
    this.getSkills();
  }

}
