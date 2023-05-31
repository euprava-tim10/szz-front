import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-job-alert-item',
  templateUrl: './job-alert-item.component.html',
  styleUrls: ['./job-alert-item.component.css']
})
export class JobAlertItemComponent {
  @Input() jobAlert: any;

  timeleft() {
    let days = Math.floor((this.jobAlert.endDate - Date.now()) / 1000 / 60 / 60 / 24);
    if(days > 1){
      return days+" days."
    }
    if(days == 1){
      return "1 day."
    }
    if(days < 1){
      return "Ends today."
    }
    return "Something went wrong."
  }
}
