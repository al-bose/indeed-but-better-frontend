import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTimeUserSetupComponent } from './first-time-user-setup.component';

describe('FirstTimeUserSetupComponent', () => {
  let component: FirstTimeUserSetupComponent;
  let fixture: ComponentFixture<FirstTimeUserSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstTimeUserSetupComponent]
    });
    fixture = TestBed.createComponent(FirstTimeUserSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
