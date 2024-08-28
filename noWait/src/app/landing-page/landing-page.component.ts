import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(){
    this.fillTimePeriods();
  }

  
  @ViewChild('foodTypeInput') foodTypeInput!: ElementRef;
  selectedLocation: string | null = null;
  selectedFoodType: string | null = null;
  selectedTimePeriod: string | null = null;
  numberofGuestSelected :string | null = null;
  searchTerm: string = '';
  isDropdownOpen: { [key: string]: boolean } = {
    foodType: false,
    timePeriod: false,
    guestSelected: false
  };
  foodTypes: string[] = ['Continental', 'Indian', 'Chinese'];
  timePeriods: string[] =[];
  guestNumbers: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,'Larger Party'];
  filteredFoodTypes: string[] = [...this.foodTypes];

  selectLocation(location: string) {
    this.selectedLocation = location;
  }

  selectItem(type: string, item: string): void {
    if (type === 'foodType') {
      this.selectedFoodType = item;
    } else if (type === 'timePeriod') {
      this.selectedTimePeriod = item;
    }
      else if(type === 'guestSelected'){
        this.numberofGuestSelected = item
      }
    this.isDropdownOpen[type] = false;
    this.closeDropdown(type)
  }

  toggleDropdown(type:string, open: boolean) {
    this.isDropdownOpen[type] = open;
  }

  closeDropdown(type:string) {
    setTimeout(() => {
      this.isDropdownOpen[type] = false;
    }, 200); // slight delay to allow click event to register
  }

  focusInput() {
    this.foodTypeInput.nativeElement.focus();
  }

  fillTimePeriods() {
    const startHour = 9; // 9 AM
    const endHour = 22; // 12 PM
    const interval = 30; // Half hour interval in minutes

    let currentHour = startHour;
    let currentMinute = 0;

    while (currentHour < endHour || (currentHour === endHour && currentMinute === 0)) {
      const formattedTime = `${this.formatTime(currentHour)}:${this.formatMinutes(currentMinute)} ${currentHour >= 12 ? 'PM' : 'AM'}`;
      this.timePeriods.push(formattedTime);

      // Increment the time
      currentMinute += interval;
      if (currentMinute === 60) {
        currentMinute = 0;
        currentHour++;
      }
    }
  }

  formatTime(hour: number): string {
    return hour > 12 ? (hour - 12).toString().padStart(2, '0') : hour.toString().padStart(2, '0');
  }

  formatMinutes(minutes: number): string {
    return minutes.toString().padStart(2, '0');
  }

  selectTime(selectedTime :string){
    this.selectedTimePeriod = selectedTime;
  }

  @HostListener('document:mousedown', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isDropdownClicked = target.closest('.form-group') !== null;

    if (!isDropdownClicked) {
      // Close all dropdowns if the click is outside
      this.isDropdownOpen = {
        foodType: false,
        timePeriod: false,
        guestSelected: false
      };
    }
  }





}
