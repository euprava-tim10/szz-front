import {Component} from '@angular/core';
import {JobAlertService} from "../../services/job-alert.service";

@Component({
  selector: 'app-job-alert-list',
  templateUrl: './job-alert-list.component.html',
  styleUrls: ['./job-alert-list.component.css']
})
export class JobAlertListComponent {
  jobAlerts: any[] = [];
  filteredAlerts: any[] = [];
  constructor(private jobAlertService: JobAlertService) {
  }

  ngOnInit() {
    this.jobAlertService.get().subscribe(jobAlerts => {
      this.jobAlerts = jobAlerts as any[];
    })
  }

  filterJobs(profession: string) {
    this.filteredAlerts = [];
    this.filteredAlerts = this.jobAlerts.filter(jobAlert => jobAlert['profession'] === profession);
  }

  showJobAlerts(): any[] {
    if (this.filteredAlerts.length < 1) {
      return this.jobAlerts;
    } else {
      return this.filteredAlerts;
    }
  }
}
