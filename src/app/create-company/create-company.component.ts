import { Component } from '@angular/core';
import {CompanyService} from "../services/company/company.service";
import {Router} from "@angular/router";
import {Company} from "../services/company/company";

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {

  constructor(private router : Router, private companyService : CompanyService) {}

  model : Company = new Company("Name", "eg. 500-100", "", "");

  onSubmit() {
    this.companyService.createCompany(this.model).subscribe(
      (x:any) => {
        console.log(x);
        this.router.navigate(["/companies"])
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
