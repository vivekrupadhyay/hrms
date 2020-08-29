import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './common/user.service';
import { SharedModule } from '../../Shared/shared.module';

@NgModule({
  declarations: [
    UserManagementComponent,
    CreateUserComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserManagementRoutingModule,
    SharedModule,
  ],
  providers: [UserService],
})
export class UserManagementModule {}
