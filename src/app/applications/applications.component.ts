import { Component } from '@angular/core';
import {User} from "../services/user/user";
import {JobListing} from "../services/jobListing/jobListing";
import {JobListingService} from "../services/jobListing/jobListing.service";
import {Router} from "@angular/router";
import {ApplicationService} from "../services/application/application.service";
import {Application} from "../services/application/application";

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {

  user: User = JSON.parse(localStorage.getItem("currentUser")!);
  userApplications : Application[] = [];
  selectedApplication? : Application;

  recruiterJobListings: JobListing[] = [];
  selectedListing? : JobListing;
  jobListingApplications : Application[] = [];

  constructor(private applicationService : ApplicationService, private router : Router, private jobListingService : JobListingService) {}

  ngOnInit() : void {

    if (this.user.userType === "recruiter")
    {
      this.getUserApplications();
    }
    else
    {
      this.getJobListings();
    }
  }

  getUserApplications() : void {
    this.applicationService.getApplicationsByUserId(this.user.userId)
      .subscribe(applications => {
        this.userApplications = applications;
        this.selectedApplication = applications[0];
      })
  }

  getJobListings() : void {
    this.jobListingService.getJobListings(0)
      .subscribe(jobListings => {
        this.recruiterJobListings = jobListings;
      });
  }

  changeSelectedListing(jobListing : JobListing) : void {
    this.selectedListing = jobListing;
    this.applicationService.getApplicationsByJobListingId(this.selectedListing?.jobListingId!)
      .subscribe(applications => this.jobListingApplications = applications)
  }

  changeSelectedApplication(application : Application) : void {
    this.selectedApplication = application;
  }

}
