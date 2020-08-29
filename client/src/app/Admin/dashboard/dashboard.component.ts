import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ComponentFactoryResolver,
  ViewContainerRef,
  Type,
} from '@angular/core';
import { ComponentHostDirective } from './common/directive/component-host.directive';
import {
  DetailsComponentHostConfig,
  DetailsContext,
  DetailsComponent,
} from '../../Admin/dashboard/common/interface/dashboard-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AttendenceManagementComponent } from '../attendence-management/attendence-management.component';
import { ApprovalManagementComponent } from '../approval-management/approval-management.component';
import { SelfServicesComponent } from '../self-services/self-services.component';
import { LeaveManagementComponent } from '../leave-management/leave-management.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChildren(ComponentHostDirective) componentHostInstances!: QueryList<
    ComponentHostDirective
  >;
  public detailsComponentHostConfig: DetailsComponentHostConfig[] = [];
  public detailsContext: DetailsContext;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.initConfig();
  }
  initConfig(): void {
    this.detailsComponentHostConfig = [
      {
        instanceKey: 'AttendenceManagementInstanceKey',
        title: 'Application',
        component: AttendenceManagementComponent as Type<DetailsComponent>,
      },
      {
        instanceKey: 'ApprovalManagementComponentInstanceKey',
        title: 'Approvals',
        component: ApprovalManagementComponent as Type<DetailsComponent>,
      },
      {
        instanceKey: 'SelfServicesComponentInstanceKey',
        title: 'Self Services',
        component: SelfServicesComponent as Type<DetailsComponent>,
      },
      {
        instanceKey: 'LeaveManagementComponentInstanceKey',
        title: 'Apply Leave',
        component: LeaveManagementComponent as Type<DetailsComponent>,
      },
    ];
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(take(1)).subscribe((params) => {
      this.detailsContext = {
        userId: +params.get('userId'),
      } as DetailsContext;
    });
  }
  public onOpened(instanceKey: string): void {
    const detailComponentRef = this.getDetailComponent(instanceKey);
    const viewRef: ComponentHostDirective = this.getComponentHostViewRef(
      instanceKey
    );

    if (viewRef && !viewRef.viewContainerRef.get(0) && detailComponentRef) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        detailComponentRef.component
      );
      const viewContainerRef = viewRef.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as AttendenceManagementComponent).context = this.detailsContext;
    }
  }
  public onDestroyed(instanceKey: string): void {
    const viewRef: ComponentHostDirective = this.getComponentHostViewRef(
      instanceKey
    );
    if (viewRef) {
      const viewContainerRef = viewRef.viewContainerRef;
      viewContainerRef.clear();
    }
  }
  public navigateBack(): void {
    this.router.navigate(['dashboard', this.detailsContext.userId], {
      relativeTo: this.route.parent,
    });
  }

  getComponentHostViewRef(instanceKey: string): ComponentHostDirective {
    const viewRef: ComponentHostDirective = this.componentHostInstances.find(
      (item) => {
        if (item.instanceKey === instanceKey) {
          return true;
        }
      }
    );
    return viewRef;
  }
  getDetailComponent(instanceKey: string): DetailsComponentHostConfig {
    const detailsComponentRef = this.detailsComponentHostConfig.find((item) => {
      if (item.instanceKey === instanceKey) {
        return true;
      }
    });
    return detailsComponentRef;
  }
}
