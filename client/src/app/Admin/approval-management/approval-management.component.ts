import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  DetailsComponent,
  DetailsContext,
} from '../dashboard/common/interface/dashboard-interface';

@Component({
  selector: 'app-approval-management',
  templateUrl: './approval-management.component.html',
  styleUrls: ['./approval-management.component.scss'],
})
export class ApprovalManagementComponent
  implements OnInit, OnDestroy, DetailsComponent {
  public context: DetailsContext;

  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
