import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RedirectComponent} from "./redirect/redirect.component";
import {HomeComponent} from "./pages/home/home.component";
import {NotificationsComponent} from "./components/notifications/notifications.component";

const routes: Routes = [
  {path: "redirect", component: RedirectComponent},
  {path: "notifications", component: NotificationsComponent},
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
