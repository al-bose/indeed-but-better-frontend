import { Component } from '@angular/core';
import {CompanyService} from "../services/company/company.service";
import {Company} from "../services/company/company";
import {Router} from "@angular/router";
import {User} from "../services/user/user";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {

  constructor(private companyService : CompanyService, private router : Router) {}

  companies : Company[] = [];
  selectedCompany? : Company;
  user: User = JSON.parse(localStorage.getItem("currentUser")!);

  ngOnInit() : void
  {
    this.getCompanies();
  }

  getCompanies() : void {
    this.companyService.getAllCompanies()
      .subscribe(companies => {
        this.companies = companies;
        this.selectedCompany = this.companies.at(0);
      })
  }

  changeSelectedCompany(company : Company) : void {
    this.selectedCompany = company;
  }

  navigateToCreation() : void {
    this.router.navigate(['/create-job-listing'])
      .then(() => {
        window.location.reload();
      });
  }

}







