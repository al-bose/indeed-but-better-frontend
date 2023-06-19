import {Router} from "@angular/router";
import {UserService} from "../../../services/user/user.service";
import {EducationService} from "../../../services/education/education.service";
import {User} from "../../../services/user/user";
import {Education} from "../../../services/education/education";
import {Component} from "@angular/core";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  constructor(private router: Router,
              private userService: UserService,
              private educationService:EducationService) {}

  user:User = this.userService.getCurrentUser();
  education: Education[] = [];

  getEducation() {
    this.educationService.getEducationForUser().subscribe(
      response => {
        for(let temp of response) {
          let edu = new Education(temp.universityName,temp.degreeType,temp.majorName,
            temp.graduationYear,temp.description);
          edu.educationId = temp.educationId;
          edu.sortIndex = temp.sortIndex;
          this.education.push(edu);
        }
      }
    );
    this.education.sort((a, b) => a.sortIndex - b.sortIndex);
  }

  sortedEducation():Education[] {
    return this.education.sort((a, b) => a.sortIndex - b.sortIndex);
 }
  onEditPage():boolean {
    return this.router.url === '/user/profile/edit-education';
  }

  anyEducationSelectedForDeletion():boolean {
    return this.education.some(item => item.isSelected);
  }

  deleteSelectedEducation() {
    for(let i = 0; i < this.education.length; i++) {
      if(this.education[i].isSelected) {
        this.educationService.deleteEducation(this.education[i]).subscribe(
          response => {
            console.log(response);
          }
        );
      }
    }
    window.location.reload();
  }

  ngOnInit() {
    this.getEducation();
    this.education = this.sortedEducation();
  }

  draggingIndex: number;
  undIdx:number;

  private _reorderItem(fromIndex: number, toIndex: number): void {
    const itemToBeReordered = this.education.splice(fromIndex, 1)[0];
    this.education.splice(toIndex, 0, itemToBeReordered);
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
    console.log("in update indices persist");
    for(let i = 0; i < this.education.length; i++) {
      this.education[i].sortIndex = i;
    }
    console.log(this.education);
  }

  persistSortIndices() {
    console.log("in persist");
    for(let i = 0; i < this.education.length; i++) {
      this.education[i].sortIndex = i;
      this.educationService.updateEducation(this.education[i]).subscribe(
        response => {
          console.log(response);
        }
      );
    }
    window.location.reload();
  }



}
