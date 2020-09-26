import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../Shared/shared.module';
import { ComponentHostDirective } from './common/directive/component-host.directive';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [DashboardComponent, ComponentHostDirective, WizardComponent],
  imports: [DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
