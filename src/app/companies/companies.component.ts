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
  user: User = JSON.parse(localStorage.getItem("currentUser")!);
  jobListings: JobListing[] = [];
  selectedListing? : JobListing;
  searchQuery : String = "";

  ngOnInit() : void
  {
    this.getCompanies();
  }

  getCompanies() : void {
    this.companyService.getAllCompanies()
      .subscribe(companies => {
        this.companies = companies;
        this.selectedCompany = this.companies.at(0);
        this.jobListingService.getAllJobListingsByCompanyId(this.selectedCompany?.id!)
          .subscribe(jobs => {this.jobListings = jobs; this.selectedListing = jobs.at(0)});
      })
  }

  changeSelectedCompany(company : Company) : void {
    this.selectedCompany = company;

    this.jobListingService.getAllJobListingsByCompanyId(this.selectedCompany?.id)
      .subscribe(jobs => {this.jobListings = jobs; this.selectedListing = jobs.at(0)});
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
    this.companyService.searchCompanies(this.searchQuery)
      .subscribe(companies => {
        this.companies = companies;
        this.selectedCompany = this.companies.at(0);
        this.jobListingService.getAllJobListingsByCompanyId(this.selectedCompany?.id!)
          .subscribe(jobs => {this.jobListings = jobs; this.selectedListing = jobs.at(0)});
      })
  }

}







