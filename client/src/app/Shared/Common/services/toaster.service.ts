import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ToastrNotification } from '../toasternotification';
import { Router, NavigationStart } from '@angular/router';
import { NotificationType } from '../notification-type.enum';

@Injectable()
export class ToasterService {
  public subject = new Subject<ToastrNotification>();
  public keepAfterRouteChange = true;
  constructor(public router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }
  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success = (message: string, keepAfterRouteChange = false): void => {
    this.showNotification(
      NotificationType.Success,
      message,
      keepAfterRouteChange
    );
  };

  error = (message: string, keepAfterRouteChange = false): void => {
    this.showNotification(
      NotificationType.Error,
      message,
      keepAfterRouteChange
    );
  };

  info = (message: string, keepAfterRouteChange = false): void => {
    this.showNotification(NotificationType.Info, message, keepAfterRouteChange);
  };

  warn = (message: string, keepAfterRouteChange = false): void => {
    this.showNotification(
      NotificationType.Warning,
      message,
      keepAfterRouteChange
    );
  };

  showNotification = (
    type: NotificationType,
    message: string,
    keepAfterRouteChange = false
  ): void => {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type, message } as ToastrNotification);
  };

  clear(): void {
    this.subject.next();
  }
}
