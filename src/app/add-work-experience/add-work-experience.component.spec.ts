import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkExperienceComponent } from './add-work-experience.component';

describe('AddWorkExperienceComponent', () => {
  let component: AddWorkExperienceComponent;
  let fixture: ComponentFixture<AddWorkExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkExperienceComponent]
    });
    fixture = TestBed.createComponent(AddWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
