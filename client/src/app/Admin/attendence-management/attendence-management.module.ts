import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendenceManagementRoutingModule } from './attendence-management-routing.module';
import { AttendenceManagementComponent } from './attendence-management.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [
    AttendenceManagementComponent,
    TimeSheetComponent,
    AttendenceListComponent,
  ],
  imports: [CommonModule, AttendenceManagementRoutingModule, SharedModule],
})
export class AttendenceManagementModule {}
