import { Component } from '@angular/core';
import {UserNotificationsService} from "../../../services/user-notifications/user-notifications.service";
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../services/user/user";
import {UserNotification} from "../../../services/user-notifications/user-notification";
import {Notif} from "../../../services/notif/notif";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  constructor(private userNotificationService:UserNotificationsService,
              private userService:UserService) {}

  user:User = this.userService.getCurrentUser();
  userNotifications: UserNotification[] = [];
  selectedUserNotification: UserNotification;

  getNotificationsForCurrentUser() {
    this.userNotificationService.getNotificationsForUser().subscribe(
      response => {
        for(let temp of response) {
          let notif = new Notif(temp.notification.notificationDate,
            temp.notification.notificationText,
            temp.notification.notificationType,
            temp.notification.notificationUrgency);
          let userNotification = new UserNotification(temp.userNotificationId,
            notif, temp.notificationRead);
          this.userNotifications.push(userNotification);
        }
      }
    );
  }

  selectUserNotification(index:number) {
    this.userNotifications[index].notificationRead = true;
    this.selectedUserNotification = this.userNotifications[index];
    this.userNotificationService.updateUserNotification(this.userNotifications[index]).subscribe(
      result => {
        console.log(result);
      }
    );
  }

  deleteUserNotification(index:number) {
    this.userNotificationService.deleteUserNotification(this.userNotifications[index]).subscribe(
      result => {
        console.log(result);
      }
    );
    this.userNotifications[index].notification.notificationUrgency = "deleted";
    this.userNotifications = this.userNotifications.filter(item => item.notification.notificationUrgency != "deleted");
  }

  ngOnInit() {
    this.getNotificationsForCurrentUser();
  }

}
