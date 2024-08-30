import { Component, Input } from '@angular/core';
import { RatingCardComponent } from '../rating-card/rating-card.component';

@Component({
  selector: 'app-top-picks-card',
  templateUrl: './top-picks-card.component.html',
  styleUrls: ['./top-picks-card.component.scss'],
})
export class TopPicksCardComponent {
  @Input() restaurantName!: string;
  @Input() rating!: number;
  @Input() imageLoc!: string;
}
