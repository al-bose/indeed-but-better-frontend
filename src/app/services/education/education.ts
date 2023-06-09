export class Education {
  universityName:string;
  degreeType:string;
  majorName:string;
  graduationYear:string;
  description:string;

  constructor(universityName:string,degreeType:string,majorName:string,graduationYear:string,description:string) {
    this.universityName = universityName;
    this.degreeType = degreeType;
    this.majorName = majorName;
    this.graduationYear = graduationYear;
    this.description = description;
  }

}
