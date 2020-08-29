import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveManagementComponent } from './leave-management.component';

const routes: Routes = [{ path: '', component: LeaveManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveManagementRoutingModule { }
