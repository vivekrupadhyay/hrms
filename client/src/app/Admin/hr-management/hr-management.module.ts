import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrManagementRoutingModule } from './hr-management-routing.module';
import { HrManagementComponent } from './hr-management.component';


@NgModule({
  declarations: [HrManagementComponent],
  imports: [
    CommonModule,
    HrManagementRoutingModule
  ]
})
export class HrManagementModule { }
