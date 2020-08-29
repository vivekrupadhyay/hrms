import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalManagementComponent } from './approval-management.component';

describe('ApprovalManagementComponent', () => {
  let component: ApprovalManagementComponent;
  let fixture: ComponentFixture<ApprovalManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
