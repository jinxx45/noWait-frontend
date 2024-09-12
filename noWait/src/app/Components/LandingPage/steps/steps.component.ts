import { Component } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
  steps: any = [
    {
      Heading: 'Choose Restaurant',
      description: 'Browse and select from a variety of top-rated restaurants',
    },
    {
      Heading: 'Select Time',
      description: 'Pick a convenient time for your reservation.',
    },
    {
      Heading: 'Select seating',
      description:
        'Choose your preferred seating arrangement before confirming your reservation.',
    },
    {
      Heading: 'Confirm Booking',
      description: 'Review your details and confirm your reservation.',
    },
  ];
}
