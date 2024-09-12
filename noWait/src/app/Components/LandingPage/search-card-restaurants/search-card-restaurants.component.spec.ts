import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardRestaurantsComponent } from './search-card-restaurants.component';

describe('SearchCardRestaurantsComponent', () => {
  let component: SearchCardRestaurantsComponent;
  let fixture: ComponentFixture<SearchCardRestaurantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCardRestaurantsComponent]
    });
    fixture = TestBed.createComponent(SearchCardRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
