export class Notif {
  notificationId:number;
  notificationDate:Date;
  notificationText:string;
  notificationType:string;
  notificationUrgency:string;
  notificationAge:String;

  constructor(notificationDate:string,notificationText:string,notificationType:string,
              notificationUrgency:string) {
      if(notificationDate) {
        this.notificationDate = new Date(notificationDate);
      }
      this.notificationText = notificationText;
      this.notificationType = notificationType;
      this.notificationUrgency = notificationUrgency;
  }

}
