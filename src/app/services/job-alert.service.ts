import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../env";

@Injectable({
  providedIn: 'root'
})
export class JobAlertService {

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(`${env.apiUrl}/jobAlerts`)
  }

  applicate(jobAlertId: number) {
    return this.http.get(`${env.apiUrl}/jobAlerts/${jobAlertId}`)
  }
}
