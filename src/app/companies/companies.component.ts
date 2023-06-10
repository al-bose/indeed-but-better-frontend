import { Component } from '@angular/core';
import {CompanyService} from "../services/company/company.service";
import {Company} from "../services/company/company";
import {Router} from "@angular/router";
import {User} from "../services/user/user";
import {JobListing} from "../services/jobListing/jobListing";
import {JobListingService} from "../services/jobListing/jobListing.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {

  constructor(private companyService : CompanyService, private router : Router, private jobListingService : JobListingService) {}

  companies : Company[] = [];
  selectedCompany? : Company;

  //company pagination properties
  currentCompanyPage : number = 0;
  totalCompanies : number = 0;
  totalCompanyPages : number = 0;
  companyPageSize : number = 0;

  jobListings: JobListing[] = [];
  selectedListing? : JobListing;

  //job listing pagination properties
  currentJobPage : number = 0;
  totalJobs : number = 0;
  totalJobPages : number = 0;
  jobPageSize : number = 0;

  user: User = JSON.parse(localStorage.getItem("currentUser")!);
  searchQuery : String = "";


  ngOnInit() : void
  {
    this.getPageOfCompanies();
  }


  getPageOfCompanies() : void {
    this.companyService.getPage(this.currentCompanyPage)
      .subscribe(response => {
        const {content, totalElements, totalPages, size} = response;
        this.companies = content;
        this.totalCompanies = totalElements;
        this.totalCompanyPages = totalPages;
        this.companyPageSize = size;
        this.selectedCompany = this.companies.at(0);
        this.currentJobPage = 0;
        this.getPageOfJobs();
      })
  }

  getPageOfJobs() : void {
    this.jobListingService.getJobListingsByCompanyId(this.selectedCompany?.id!, this.currentJobPage)
      .subscribe(response => {
        const {content, totalElements, totalPages, size} = response;
        this.jobListings = content;
        this.selectedListing = content[0];
        this.totalJobs = totalElements;
        this.totalJobPages = totalPages;
        this.jobPageSize = size;
      });
  }

  changeSelectedCompany(company : Company) : void {
    this.selectedCompany = company;
    this.currentJobPage = 0;
    this.getPageOfJobs();
  }


  navigateToCompanyCreation() : void {
    this.router.navigate(['/create-company'])
      .then(() => {
        window.location.reload();
      });
  }

  navigateToJobListingCreation() : void {
    this.router.navigate(['/create-job-listing'])
      .then(() => {
        window.location.reload();
      });
  }

  searchCompanies() : void {
    if (this.searchQuery !== "")
    {
      this.companyService.searchCompanies(this.searchQuery, this.currentCompanyPage)
        .subscribe(response => {
          const {content, totalElements, totalPages, size} = response;
          this.companies = content;
          this.totalCompanies = totalElements;
          this.totalCompanyPages = totalPages;
          this.companyPageSize = size;
          this.selectedCompany = this.companies.at(0);
          this.currentJobPage = 0;
          this.getPageOfJobs();
        });
    }
    else
    {
      this.getPageOfCompanies();
    }

  }

  getNextPageOfCompanies() : void {
    this.currentCompanyPage++;

    if (this.searchQuery !== "")
    {
      this.searchCompanies();
    }
    else {
      this.getPageOfCompanies();
    }
  }

  getPreviousPageOfCompanies() : void {
    this.currentCompanyPage--;

    if (this.searchQuery !== "")
    {
      this.searchCompanies();
    }
    else {
      this.getPageOfCompanies();
    }
  }
  getNextPageOfJobs() : void {
    this.currentJobPage++;
    this.getPageOfJobs();


  }

  getPreviousPageOfJobs() : void {
    this.currentJobPage--;
    this.getPageOfJobs();
  }
}







