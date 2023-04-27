import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RedirectComponent} from "./redirect/redirect.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path: "redirect", component: RedirectComponent},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
