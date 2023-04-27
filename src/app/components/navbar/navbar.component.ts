import { Component } from '@angular/core';
import {AuthManagerService} from "../../auth/auth-manager.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  principal: any;
  constructor(private authManagerService: AuthManagerService) { }

  ngOnInit(): void {
    this.principal = this.authManagerService.getPrincipal();
  }

  isLoggedIn() {
    return this.authManagerService.isLoggedIn();
  }

  logout() {
    return this.authManagerService.logoutUserAndRedirect();
  }
}
