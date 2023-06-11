export class WorkExperienceOld {
  workExperienceId:number;
  jobTitle:string;
  companyName:string;
  startDate:string;
  endDate:string;
  description:string;
  location:string;
  length:string;
  rawEndDate:Date;
  rawStartDate:Date;
  isSelected:boolean = false;

  constructor(workExperienceID:number,jobTitle:string,companyName:string,startDate:string,endDate:string,description:string,location:string) {
    this.workExperienceId = workExperienceID;
    this.jobTitle = jobTitle;
    this.companyName = companyName;
    this.startDate = this.formatDate(startDate);
    this.rawStartDate = new Date(startDate);
    if(endDate === "Present") {
      this.rawEndDate = new Date();
    } else {
      this.endDate = this.formatDate(endDate);
      this.rawEndDate = new Date(endDate);
    }
    this.description = description;
    this.location=location;
    this.calcPositionLength();
  }

  calcPositionLength() {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(this.rawStartDate.getFullYear(), this.rawStartDate.getMonth(), this.rawStartDate.getDate());
    const utc2 = Date.UTC(this.rawEndDate.getFullYear(), this.rawEndDate.getMonth(), this.rawEndDate.getDate());

    var differenceInDays = Math.floor((utc2 - utc1) / _MS_PER_DAY);
    if(differenceInDays <= 31) {
      this.length = "1 Month"
    } else if (differenceInDays <= 365) {
      this.length = String(Math.floor(differenceInDays / 30)) + " mo";
    } else {
      this.length = String(Math.floor(differenceInDays / 365)) + " yr " +
        String(Math.floor((differenceInDays%365) / 30)) + " mo";
    }
  }

  formatDate(oldDate:string):string {
    var date = new Date(oldDate);
    return date.toLocaleString('en-US', { month: 'short' }) + " " + date.getFullYear();
  }

}
