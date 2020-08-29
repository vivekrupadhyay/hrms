import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  DetailsComponent,
  DetailsContext,
} from '../dashboard/common/interface/dashboard-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendence-management',
  templateUrl: './attendence-management.component.html',
  styleUrls: ['./attendence-management.component.scss'],
})
export class AttendenceManagementComponent
  implements OnInit, OnDestroy, DetailsComponent {
  public context: DetailsContext;
  public isDisable: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}
  attendence(): void {
    this.isDisable = false;
  }
  getClockIn(): void {
    this.router.navigate(['clock-in']);
  }
  getClockOut(): void {
    this.router.navigate(['clock-out']);
  }
  getListView(): void {
    this.router.navigate(['list']);
  }
}
