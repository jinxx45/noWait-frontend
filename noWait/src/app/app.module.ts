import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageScreen } from './Screens/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { TopPicksCardComponent } from './Components/LandingPage/top-picks-card/top-picks-card.component';
import { RatingCardComponent } from './Components/LandingPage/rating-card/rating-card.component';
import { StepsComponent } from './Components/steps/steps.component';
import { PreFooterComponent } from './Components/LandingPage/pre-footer/pre-footer.component';
import { SearchCardRestaurantsComponent } from './Components/LandingPage/search-card-restaurants/search-card-restaurants.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageScreen,
    TopPicksCardComponent,
    RatingCardComponent,
    StepsComponent,
    PreFooterComponent,
    SearchCardRestaurantsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
