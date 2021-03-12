import { Component, OnInit } from '@angular/core';
import { ToastrNotification } from '../../Shared/common/toasternotification';
import { NotificationType } from '../Common/notification-type.enum';
import { ToasterService } from '../Common/services/toaster.service';

@Component({
  selector: 'app-toster',
  templateUrl: './toster.component.html',
  styleUrls: ['./toster.component.scss'],
})
export class TosterComponent implements OnInit {
  notifications: ToastrNotification[] = [];
  constructor(public notificationService: ToasterService) {}

  ngOnInit(): void {
    this.notificationService
      .getAlert()
      .subscribe((alert: ToastrNotification) => {
        this.notifications = [];
        if (!alert) {
          this.notifications = [];
          return;
        }
        this.notifications.push(alert);
        setTimeout(() => {
          this.notifications = this.notifications.filter((x) => x !== alert);
        }, 8000);
      });
  }
  removeNotification = (notification: ToastrNotification): void => {
    this.notifications = this.notifications.filter((x) => x !== notification);
  };
  cssClass = (notification: ToastrNotification) => {
    if (!notification) {
      return;
    }
    switch (notification.type) {
      case NotificationType.Success:
        return 'toast-success';
      case NotificationType.Error:
        return 'toast-error';
      case NotificationType.Info:
        return 'toast-info';
      case NotificationType.Warning:
        return 'toast-warning';
    }
  };
}
