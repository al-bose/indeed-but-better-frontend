import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobListingComponent } from './create-job-listing.component';

describe('CreateJobListingComponent', () => {
  let component: CreateJobListingComponent;
  let fixture: ComponentFixture<CreateJobListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateJobListingComponent]
    });
    fixture = TestBed.createComponent(CreateJobListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
