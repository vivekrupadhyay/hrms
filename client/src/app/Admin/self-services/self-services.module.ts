import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfServicesRoutingModule } from './self-services-routing.module';
import { SelfServicesComponent } from './self-services.component';


@NgModule({
  declarations: [SelfServicesComponent],
  imports: [
    CommonModule,
    SelfServicesRoutingModule
  ]
})
export class SelfServicesModule { }
