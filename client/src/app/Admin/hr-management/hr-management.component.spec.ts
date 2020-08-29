import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManagementComponent } from './hr-management.component';

describe('HrManagementComponent', () => {
  let component: HrManagementComponent;
  let fixture: ComponentFixture<HrManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
