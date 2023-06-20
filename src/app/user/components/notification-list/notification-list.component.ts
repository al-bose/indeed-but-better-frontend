import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {UserNotification} from "../../../services/user-notifications/user-notification";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
 @Input() userNotifications:UserNotification[] = [];
 @Output() selectUserNotificationEvent = new EventEmitter<number>();
 @Output() deleteUserNotificationEvent = new EventEmitter<number>();
  selectUserNotification(index:number) {
    this.selectUserNotificationEvent.emit(index);
  }

  deleteUserNotification(index:number) {
    this.deleteUserNotificationEvent.emit(index);
  }

}
