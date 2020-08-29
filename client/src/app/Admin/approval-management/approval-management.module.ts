import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalManagementRoutingModule } from './approval-management-routing.module';
import { ApprovalManagementComponent } from './approval-management.component';


@NgModule({
  declarations: [ApprovalManagementComponent],
  imports: [
    CommonModule,
    ApprovalManagementRoutingModule
  ]
})
export class ApprovalManagementModule { }
