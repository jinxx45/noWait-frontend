import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageScreen } from './Screens/landing-page/landing-page.component';
const routes: Routes = [
  { path: '', component: LandingPageScreen }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
