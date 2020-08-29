import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendenceManagementComponent } from './attendence-management.component';

const routes: Routes = [{ path: '', component: AttendenceManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendenceManagementRoutingModule { }
