import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageScreen } from './Screens/landing-page/landing-page.component';
import { RestaurantListScreen } from './Screens/restaurant-list/restaurant-list.component';

const routes: Routes = [
  { path: '', component: LandingPageScreen },
  { path: 'restaurants', component: RestaurantListScreen },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
