import {Company} from "../company/company";

export class JobListing {
  jobListingId: number;
  jobTitle: string;
  description: string;
  salary: number;
  company : Company;

  constructor(jobTitle: string, description: string, salary: number) {
    this.jobTitle = jobTitle;
    this.description = description;
    this.salary = salary;
  }
}
