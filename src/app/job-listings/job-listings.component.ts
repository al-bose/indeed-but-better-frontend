import { Component } from '@angular/core';
import {JobListingService} from "../services/jobListing/jobListing.service";
import {JobListing} from "../services/jobListing/jobListing";
import {User} from "../services/user/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent {

  constructor(private jobListingService : JobListingService, private router : Router) {}

  jobListings: JobListing[] = [];
  selectedListing? : JobListing;
  user: User = JSON.parse(localStorage.getItem("currentUser")!);

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

  navigateToCreation() : void {
    this.router.navigate(['/create-job-listing'])
      .then(() => {
        window.location.reload();
      });
  }

}
