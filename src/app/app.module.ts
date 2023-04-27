import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {RedirectComponent} from './redirect/redirect.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JobAlertListComponent} from './components/job-alert-list/job-alert-list.component';
import {JobAlertItemComponent} from './components/job-alert-list/job-alert-item/job-alert-item.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RedirectComponent,
    NavbarComponent,
    JobAlertListComponent,
    JobAlertItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
