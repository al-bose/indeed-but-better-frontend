export class Skill {
  skillId:number;
  skillName:string;
  isSelected:boolean = false;
  sortIndex:number;

  constructor(skillName:string) {
    this.skillName = skillName;
  }

}
