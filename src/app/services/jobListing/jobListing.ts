export class JobListing {
  jobListingId: number;
  jobTitle: string;
  description: string;
  salary: number;
  location: string;

  constructor(jobTitle: string, description: string, salary: number, location: string) {
    this.jobTitle = jobTitle;
    this.description = description;
    this.salary = salary;
    this.location = location;
  }

}
