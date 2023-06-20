import {Notif} from "../notif/notif";

export class UserNotification {
  userNotificationId:number;
  notification:Notif;
  notificationRead:boolean;

  constructor(userNotificationId:number, notification:Notif, notificationRead:boolean) {
    this.userNotificationId = userNotificationId;
    this.notification = notification;
    this.notificationRead = notificationRead;
  }
}
