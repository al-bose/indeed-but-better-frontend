import { Component } from '@angular/core';
import {JobListingService} from "../services/jobListing/jobListing.service";
import {JobListing} from "../services/jobListing/jobListing";
import {User} from "../services/user/user";
import { Router } from '@angular/router';
import {ApplicationService} from "../services/application/application.service";
import {Application} from "../services/application/application";

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent {

  constructor(private jobListingService : JobListingService, private router : Router, private applicationService : ApplicationService) {}

  jobListings: JobListing[] = [];
  selectedListing? : JobListing;
  user: User = JSON.parse(localStorage.getItem("currentUser")!);

  searchQuery : String = "";

  //job listing pagination properties
  currentJobPage : number = 0;
  totalJobs : number = 0;
  totalJobPages : number = 0;
  jobPageSize : number = 0;

  ngOnInit() : void {
    this.getPageOfJobListings();
  }

  getPageOfJobListings() : void {
    this.jobListingService.getJobListings(this.currentJobPage)
      .subscribe(response => {
        const {content, totalElements, totalPages, size} = response;
        this.jobListings = content;
        this.totalJobs = totalElements;
        this.totalJobPages = totalPages;
        this.jobPageSize = size;
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

 apply() : void {

   let application = new Application("Testing application creation", this.user.name + "'s Application To " + this.selectedListing?.jobTitle);

    this.applicationService.createApplication(application, this.user.userId, this.selectedListing?.jobListingId!)
      .subscribe((x:any) => {
          console.log(x);
          this.router.navigate(["/job-listings"])
            .then(() => {
              window.location.reload();
            })
        },
        (error:any) => {
          console.log(error);
        }
      );
  }

  searchJobs() : void {
    if (this.searchQuery !== "")
    {
      this.jobListingService.searchJobs(this.searchQuery, this.currentJobPage)
        .subscribe(response => {
          const {content, totalElements, totalPages, size} = response;
          this.jobListings = content;
          this.totalJobs = totalElements;
          this.totalJobPages = totalPages;
          this.jobPageSize = size;
          this.selectedListing = this.jobListings.at(0);
        });
    }
    else
    {
      this.currentJobPage = 0;
      this.getPageOfJobListings();
    }
  }

  getNextPageOfJobs() : void {
    this.currentJobPage++;

    if (this.searchQuery !== "")
    {
      this.searchJobs();
    }
    else {
      this.getPageOfJobListings();
    }
  }

  getPreviousPageOfJobs() : void {
    this.currentJobPage--;

    if (this.searchQuery !== "")
    {
      this.searchJobs();
    }
    else {
      this.getPageOfJobListings();
    }
  }

}
