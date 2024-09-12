import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PreFooterComponent } from 'src/app/Components/LandingPage/pre-footer/pre-footer.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageScreen {
  selectedLocation: string | null = null;

  selectLocation(location: string) {
    this.selectedLocation = location;
  }
}
