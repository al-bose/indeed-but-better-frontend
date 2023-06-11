import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationComponent } from './add-education.component';

describe('AddEducationComponent', () => {
  let component: AddEducationComponent;
  let fixture: ComponentFixture<AddEducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEducationComponent]
    });
    fixture = TestBed.createComponent(AddEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
