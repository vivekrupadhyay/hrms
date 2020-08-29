import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './Shared/error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './Shared/error-pages/server-error/server-error.component';

const routes: Routes = [
  {
    path: 'admin-layout',
    loadChildren: () =>
      import('./Admin/admin-layout/admin-layout.module').then(
        (m) => m.AdminLayoutModule
      ),
  },
  {
    path: 'manage-users',
    loadChildren: () =>
      import('./Admin/user-management/user-management.module').then(
        (m) => m.UserManagementModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./Components/main-layout/main-layout.module').then(
        (m) => m.MainLayoutModule
      ),
  },
  { path: '500', component: ServerErrorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Admin/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'hr-management',
    loadChildren: () =>
      import('./Admin/hr-management/hr-management.module').then(
        (m) => m.HrManagementModule
      ),
  },
  {
    path: 'leave',
    loadChildren: () =>
      import('./Admin/leave-management/leave-management.module').then(
        (m) => m.LeaveManagementModule
      ),
  },
  {
    path: 'attendence',
    loadChildren: () =>
      import('./Admin/attendence-management/attendence-management.module').then(
        (m) => m.AttendenceManagementModule
      ),
  },
  {
    path: 'approval',
    loadChildren: () =>
      import('./Admin/approval-management/approval-management.module').then(
        (m) => m.ApprovalManagementModule
      ),
  },
  {
    path: 'self-services',
    loadChildren: () =>
      import('./Admin/self-services/self-services.module').then(
        (m) => m.SelfServicesModule
      ),
  },
  {
    path: 'payroll',
    loadChildren: () =>
      import('./Admin/payroll/payroll.module').then((m) => m.PayrollModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
