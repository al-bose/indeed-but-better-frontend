import { Component } from '@angular/core';
import { User } from "./services/user/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //currentUser = JSON.parse(localStorage.getItem("currentUser"));

  constructor() {}

  ngOnInit() {}

  title = 'indeed-but-better-frontend';

}
