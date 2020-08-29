import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  DetailsComponent,
  DetailsContext,
} from '../dashboard/common/interface/dashboard-interface';

@Component({
  selector: 'app-self-services',
  templateUrl: './self-services.component.html',
  styleUrls: ['./self-services.component.scss'],
})
export class SelfServicesComponent
  implements OnInit, OnDestroy, DetailsComponent {
  public context: DetailsContext;

  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
