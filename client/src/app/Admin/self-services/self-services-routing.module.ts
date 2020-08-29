import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfServicesComponent } from './self-services.component';

const routes: Routes = [{ path: '', component: SelfServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfServicesRoutingModule { }
