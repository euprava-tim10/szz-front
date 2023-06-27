import {Component} from '@angular/core';
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications: any[] = [];

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notificationService.get().subscribe(data => {
      this.notifications = data as any[];
    })
  }
}
