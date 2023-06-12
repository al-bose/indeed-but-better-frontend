export class Skill {
  skillId:number;
  skillName:string;
  isSelected:boolean = false;

  constructor(skillName:string) {
    this.skillName = skillName;
  }

}
