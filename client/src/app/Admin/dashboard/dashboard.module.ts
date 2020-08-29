import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ComponentHostDirective } from './common/directive/component-host.directive';

@NgModule({
  declarations: [DashboardComponent, ComponentHostDirective],
  imports: [DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
