import { Component } from '@angular/core';
import {JobListing} from "../services/jobListing/jobListing";
import {Router} from "@angular/router";
import {JobListingService} from "../services/jobListing/jobListing.service";
import {User} from "../services/user/user";
import {Company} from "../services/company/company";
import {CompanyService} from "../services/company/company.service";

@Component({
  selector: 'app-create-job-listing',
  templateUrl: './create-job-listing.component.html',
  styleUrls: ['./create-job-listing.component.css']
})
export class CreateJobListingComponent {

  constructor(private router : Router, private jobListingService : JobListingService, private companyService : CompanyService) {}

  user: User = JSON.parse(localStorage.getItem("currentUser")!);
  model : JobListing = new JobListing("", "", 0.00, "");
  companies : Company[] = [];
  selectedCompanyId: number;

  ngOnInit() : void {
    this.companyService.getAllCompanies()
      .subscribe(companies => {
        this.companies = companies;
        this.selectedCompanyId = companies[0].Id;
      });
  }

  onSubmit() {
    this.jobListingService.createJobListing(this.model, this.user.userId, this.selectedCompanyId).subscribe(
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

