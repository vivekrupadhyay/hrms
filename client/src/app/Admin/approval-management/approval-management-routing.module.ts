import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovalManagementComponent } from './approval-management.component';

const routes: Routes = [{ path: '', component: ApprovalManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalManagementRoutingModule { }
