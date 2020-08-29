import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManagementComponent } from './user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';

// const routes: Routes = [//{ path: '', component: UserManagementComponent },
// { path: 'user-list', component: UserListComponent }];
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'user-management', pathMatch: 'full' },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'create-user', component: CreateUserComponent },

      { path: 'update-user/:userid', component: CreateUserComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
