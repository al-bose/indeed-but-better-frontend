import { Component } from '@angular/core';
import { UserService } from "../../../services/user/user.service";
import { Router } from "@angular/router";
import { WorkExperienceService } from "../../../services/work-experience/work-experience.service";
import { WorkExperience } from "../../../services/work-experience/work-experience";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  constructor(private userService:UserService,
              private router: Router,
              private workExperienceService:WorkExperienceService) {}

  workExperience: WorkExperience[] = [];

  getWorkExperience() {
    this.workExperienceService.getWorkExperienceForUser().subscribe(
      response => {
        for(let experience of response) {
          let workExperience = new WorkExperience();
          workExperience.workExperienceId = experience.workExperienceId;
          workExperience.jobTitle = experience.jobTitle;
          workExperience.companyName = experience.companyName;
          workExperience.startDate = experience.startDate;
          workExperience.endDate = experience.endDate;
          workExperience.description = experience.description;
          workExperience.location = experience.location;
          workExperience.sortIndex = experience.sortIndex;
          workExperience.prepareForDisplay();
          this.workExperience.push(workExperience);
        }
      }
    );
    //this.workExperience = this.workExperience.sort((a,b) => a.rawEndDate.getTime() - b.rawEndDate.getTime());
    this.workExperience.sort((a, b) => a.sortIndex - b.sortIndex);
  }

  anyWorkExperienceSelectedForDeletion():boolean {
    return this.workExperience.some(item => item.isSelected);
  }

  deleteSelectedWorkExperience() {
    for(let i = 0; i < this.workExperience.length; i++) {
      if(this.workExperience[i].isSelected) {
        this.workExperienceService.deleteWorkExperience(this.workExperience[i]).subscribe(
          response => {
            console.log(response);
          }
        );
      }
    }
    //window.location.reload();
    this.workExperience = this.workExperience.filter(item => !item.isSelected);
  }

  onEditPage():boolean {
    return this.router.url === '/user/profile/edit-work-experience';
  }

  ngOnInit(): void {
    this.getWorkExperience();
  }

  draggingIndex: number;
  undIdx:number;

  private _reorderItem(fromIndex: number, toIndex: number): void {
    const itemToBeReordered = this.workExperience.splice(fromIndex, 1)[0];
    this.workExperience.splice(toIndex, 0, itemToBeReordered);
    this.draggingIndex = toIndex;
  }

  onDragStart(index: number): void {
    this.draggingIndex = index;
  }

  onDragEnter(index: number): void {
    if (this.draggingIndex !== index) {
      this._reorderItem(this.draggingIndex, index);
    }
  }

  orderChanged:boolean = false;
  onDragEnd(): void {
    this.draggingIndex = this.undIdx;
    this.orderChanged = true;
    this.updateSortIndices();
  }

  updateSortIndices() {
    for(let i = 0; i < this.workExperience.length; i++) {
      this.workExperience[i].sortIndex = i;
    }
  }

  persistSortIndices() {
    for(let i = 0; i < this.workExperience.length; i++) {
      this.workExperience[i].sortIndex = i;
      this.workExperienceService.updateWorkExperience(this.workExperience[i]).subscribe(
        response => {
          console.log(response);
        }
      );
    }
    this.orderChanged = false;
  }

}
