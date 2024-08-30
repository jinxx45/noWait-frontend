import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageScreen } from './Screens/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { TopPicksCardComponent } from './Components/LandingPage/top-picks-card/top-picks-card.component';
import { RatingCardComponent } from './Components/LandingPage/rating-card/rating-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageScreen,
    TopPicksCardComponent,
    RatingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
