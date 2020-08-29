import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HrManagementComponent } from './hr-management.component';

const routes: Routes = [{ path: '', component: HrManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrManagementRoutingModule { }
