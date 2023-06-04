import { Component } from '@angular/core';
import {JobListingService} from "../services/jobListing/jobListing.service";
import {JobListing} from "../services/jobListing/jobListing";

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent {

  constructor(private jobListingService : JobListingService) {}
  jobListings: JobListing[] = [];
  selectedListing? : JobListing;

  ngOnInit() : void {
    this.getJobListings();
  }

  getJobListings() : void {
    this.jobListingService.getAllJobListings()
      .subscribe(jobListings => {
        this.jobListings = jobListings
        this.selectedListing = this.jobListings.at(0);
      });
  }

  changeSelectedListing(jobListing: JobListing) : void {
    this.selectedListing = jobListing;
  }
}
