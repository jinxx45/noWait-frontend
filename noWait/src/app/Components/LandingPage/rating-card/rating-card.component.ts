import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss'],
})
export class RatingCardComponent {
  @Input() rating: string = '';
}
