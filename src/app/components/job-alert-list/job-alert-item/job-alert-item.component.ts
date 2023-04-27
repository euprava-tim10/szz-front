import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-job-alert-item',
  templateUrl: './job-alert-item.component.html',
  styleUrls: ['./job-alert-item.component.css']
})
export class JobAlertItemComponent {
  @Input() jobAlert: any;

  calculateDays() {
    return Math.floor((this.jobAlert.endDate-this.jobAlert.startDate) / 1000 / 60 / 60 / 24);
  }
}
