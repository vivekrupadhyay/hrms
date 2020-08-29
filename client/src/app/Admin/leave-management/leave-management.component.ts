import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  DetailsComponent,
  DetailsContext,
} from '../dashboard/common/interface/dashboard-interface';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss'],
})
export class LeaveManagementComponent
  implements OnInit, OnDestroy, DetailsComponent {
  public context: DetailsContext;

  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
