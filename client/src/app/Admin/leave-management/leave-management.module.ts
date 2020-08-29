import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveManagementRoutingModule } from './leave-management-routing.module';
import { LeaveManagementComponent } from './leave-management.component';
import { ApplyCompoffComponent } from './apply-compoff/apply-compoff.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';


@NgModule({
  declarations: [LeaveManagementComponent, ApplyCompoffComponent, LeaveTypeComponent],
  imports: [
    CommonModule,
    LeaveManagementRoutingModule
  ]
})
export class LeaveManagementModule { }
