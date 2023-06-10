import { Component } from '@angular/core';
import {JobListing} from "../services/jobListing/jobListing";
import {Router} from "@angular/router";
import {JobListingService} from "../services/jobListing/jobListing.service";
import {Company} from "../services/company/company";
import {CompanyService} from "../services/company/company.service";

@Component({
  selector: 'app-create-job-listing',
  templateUrl: './create-job-listing.component.html',
  styleUrls: ['./create-job-listing.component.css']
})
export class CreateJobListingComponent {

  constructor(private router : Router, private jobListingService : JobListingService, private companyService : CompanyService) {}

  model : JobListing = new JobListing("", "", 0.00);
  companies : Company[] = [];
  selectedCompanyId: number;

  ngOnInit() : void {
    this.companyService.getAllCompanies()
      .subscribe(companies => {
        this.companies = companies;
        this.selectedCompanyId = companies[0].Id;
      });
  }

  getSelectedCompany() {
    for (let c of this.companies) {
      if (c.id === this.selectedCompanyId) {
        return c;
      }
    }
    return this.companies[0];
  }

  onSubmit() {
    this.model.company = this.getSelectedCompany();

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

