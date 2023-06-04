import { Component } from '@angular/core';
import {JobListing} from "../services/jobListing/jobListing";
import {Router} from "@angular/router";
import {JobListingService} from "../services/jobListing/jobListing.service";

@Component({
  selector: 'app-create-job-listing',
  templateUrl: './create-job-listing.component.html',
  styleUrls: ['./create-job-listing.component.css']
})
export class CreateJobListingComponent {

  constructor(private router : Router, private jobListingService : JobListingService) {}

  model : JobListing = new JobListing("", "", 0.00, "");

  onSubmit() {
    this.jobListingService.createJobListing(this.model).subscribe(
      (x:any) => {
        console.log(x);
        this.router.navigate(["/job-listings"])
          .then(() => {
            window.location.reload();
          })
      },
      (error:any) => {
        console.log(error);
      }
    )
  }
}

