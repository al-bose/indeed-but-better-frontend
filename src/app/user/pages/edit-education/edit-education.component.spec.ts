import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationComponent } from './edit-education.component';

describe('EditEducationComponent', () => {
  let component: EditEducationComponent;
  let fixture: ComponentFixture<EditEducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEducationComponent]
    });
    fixture = TestBed.createComponent(EditEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
