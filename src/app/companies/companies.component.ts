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
  totalCompanies : number = 0;
  totalPages : number = 0;
  pageSize : number = 0;
  selectedCompany? : Company;
  user: User = JSON.parse(localStorage.getItem("currentUser")!);
  jobListings: JobListing[] = [];
  selectedListing? : JobListing;
  searchQuery : String = "";
  page : number = 0;

  ngOnInit() : void
  {
    this.getPage();
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

  getPage() : void {
    this.companyService.getPage(this.page)
      .subscribe(response => {
        const {content, totalElements, totalPages, size} = response;
        this.companies = content;
        this.totalCompanies = totalElements;
        this.totalPages = totalPages;
        this.pageSize = size;
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







