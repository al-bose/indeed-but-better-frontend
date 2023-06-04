import {User} from "../user/user";
import {JobListing} from "../jobListing/jobListing";

export class Application {
  id: number;
  notes: string;
  name: string;
  applicant: User;
  jobListing : JobListing;

  constructor(notes: string, name : string) {
    this.notes = notes;
    this.name = name;
  }
}
