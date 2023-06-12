export class Education {
  educationId:number;
  universityName:string;
  degreeType:string;
  majorName:string;
  graduationYear:string;
  description:string;
  isSelected:boolean = false;
  sortIndex:number;

  constructor(universityName:string,degreeType:string,majorName:string,graduationYear:string,description:string) {
    this.universityName = universityName;
    this.degreeType = degreeType;
    this.majorName = majorName;
    this.graduationYear = graduationYear;
    this.description = description;
  }

}
