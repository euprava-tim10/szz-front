import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../env";
import {AuthManagerService} from "../auth/auth-manager.service";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient, private auth:AuthManagerService) { }
  get() {
    return this.http.get(`${env.apiUrl}/123/notifications`)
  }

}
