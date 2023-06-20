import {Component, Input} from '@angular/core';
import {UserNotification} from "../../../services/user-notifications/user-notification";

@Component({
  selector: 'app-selected-notification',
  templateUrl: './selected-notification.component.html',
  styleUrls: ['./selected-notification.component.css']
})
export class SelectedNotificationComponent {
  @Input() selectedUserNotification:UserNotification;

}
