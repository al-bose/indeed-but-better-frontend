import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkExperienceComponent } from './edit-work-experience.component';

describe('EditWorkExperienceComponent', () => {
  let component: EditWorkExperienceComponent;
  let fixture: ComponentFixture<EditWorkExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditWorkExperienceComponent]
    });
    fixture = TestBed.createComponent(EditWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
