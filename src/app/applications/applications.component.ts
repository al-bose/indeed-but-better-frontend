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

  jobSearchQuery : String = "";
  applicationSearchQuery : String = "";

  //job listing pagination properties
  currentJobPage : number = 0;
  totalJobs : number = 0;
  totalJobPages : number = 0;
  jobPageSize : number = 0;

  //application pagination properties
  currentApplicationPage : number = 0;
  totalApplications : number = 0;
  totalApplicationPages : number = 0;
  applicationPageSize : number = 0;

  constructor(private applicationService : ApplicationService, private router : Router, private jobListingService : JobListingService) {}

  ngOnInit() : void {

    if (this.user.userType === "recruiter")
    {
      this.getPageOfApplicationsByUser();
    }
    else
    {
      this.getPageOfJobListings();
    }
  }

  getPageOfApplicationsByUser() : void {
    this.applicationService.getApplicationsByUser(this.currentApplicationPage)
      .subscribe(response => {
        const {content, totalElements, totalPages, size} = response;
        this.userApplications = content;
        this.totalApplications = totalElements;
        this.totalApplicationPages = totalPages;
        this.applicationPageSize = size;
      });
  }

  getPageOfJobListings() : void {
    this.jobListingService.getJobListingsByUser(this.currentJobPage)
      .subscribe(response => {
        const {content, totalElements, totalPages, size} = response;
        this.recruiterJobListings = content;
        this.totalJobs = totalElements;
        this.totalJobPages = totalPages;
        this.jobPageSize = size;
        this.selectedListing = this.recruiterJobListings.at(0);
      });
  }

  searchJobs() : void {
    if (this.jobSearchQuery !== "")
    {
      this.jobListingService.searchJobsByUser(this.jobSearchQuery, this.currentJobPage)
        .subscribe(response => {
          const {content, totalElements, totalPages, size} = response;
          this.recruiterJobListings = content;
          this.totalJobs = totalElements;
          this.totalJobPages = totalPages;
          this.jobPageSize = size;
          this.selectedListing = this.recruiterJobListings.at(0);
        });
    }
    else
    {
      this.currentJobPage = 0;
      this.getPageOfJobListings();
    }
  }

  getPageOfApplicationsByJobListingId() : void {
    this.applicationService.getApplicationsByJobListingId(this.selectedListing?.jobListingId!, this.currentApplicationPage)
      .subscribe(response => {
        const {content, totalElements, totalPages, size} = response;
        this.jobListingApplications = content;
        this.totalApplications = totalElements;
        this.totalApplicationPages = totalPages;
        this.applicationPageSize = size;
      });
  }

  searchApplications() : void {
    if (this.applicationSearchQuery !== "")
    {

      if (this.user.userType !== "recruiter")
      {
        this.applicationService.searchApplicationsByJobListingId(this.applicationSearchQuery, this.currentApplicationPage, this.selectedListing?.jobListingId!)
          .subscribe(response => {
            const {content, totalElements, totalPages, size} = response;
            this.jobListingApplications = content;
            this.totalApplications = totalElements;
            this.totalApplicationPages = totalPages;
            this.applicationPageSize = size;
          });
      }
      else
      {
        this.applicationService.searchApplicationsByUser(this.applicationSearchQuery, this.currentApplicationPage)
          .subscribe(response => {
            const {content, totalElements, totalPages, size} = response;
            this.userApplications = content;
            this.totalApplications = totalElements;
            this.totalApplicationPages = totalPages;
            this.applicationPageSize = size;
          });
      }

    }
    else
    {
      this.currentApplicationPage = 0;

      if (this.user.userType === "recruiter")
      {
        this.getPageOfApplicationsByJobListingId();
      }
      else
      {
        this.getPageOfApplicationsByUser();
      }
    }
  }

  changeSelectedListing(jobListing : JobListing) : void {
    this.selectedListing = jobListing;
    this.currentApplicationPage = 0;
    this.getPageOfApplicationsByJobListingId();
  }

  changeSelectedApplication(application : Application) : void {
    this.selectedApplication = application;
  }

  getNextPageOfJobs() : void {
    this.currentJobPage++;

    if (this.jobSearchQuery !== "")
    {
      this.searchJobs();
    }
    else {
      this.getPageOfJobListings();
    }
  }

  getPreviousPageOfJobs() : void {
    this.currentJobPage--;

    if (this.jobSearchQuery !== "")
    {
      this.searchJobs();
    }
    else {
      this.getPageOfJobListings();
    }
  }
  getNextPageOfApplications() : void {
    this.currentApplicationPage++;

    if (this.applicationSearchQuery !== "")
    {
      this.searchApplications();
    }
    else {
      this.getPageOfApplicationsByJobListingId();
    }
  }

  getPreviousPageOfApplications() : void {
    this.currentApplicationPage--;

    if (this.applicationSearchQuery !== "")
    {
      this.searchApplications();
    }
    else {
      this.getPageOfApplicationsByJobListingId();
    }
  }

}
