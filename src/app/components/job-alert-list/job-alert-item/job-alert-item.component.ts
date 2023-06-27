import {Component, Input} from '@angular/core';
import {JobAlertService} from "../../../services/job-alert.service";

@Component({
  selector: 'app-job-alert-item',
  templateUrl: './job-alert-item.component.html',
  styleUrls: ['./job-alert-item.component.css']
})
export class JobAlertItemComponent {
  @Input() jobAlert: any;

  constructor(private jobAlertService: JobAlertService) {
  }

  timeleft() {
    let days = Math.floor((this.jobAlert.endDate - Date.now()) / 1000 / 60 / 60 / 24);
    if (days > 1) {
      return days + " days."
    }
    if (days == 1) {
      return "1 day."
    }
    if(days == 0){
      return "Ends today."
    }
    if (days < 1) {
      return "Ended." +
        ""
    }
    return "Something went wrong."
  }

  onApplicate(id: number) {
    this.jobAlertService.applicate(id).subscribe(data => {
      console.log(data as any);
    })
  }
}
