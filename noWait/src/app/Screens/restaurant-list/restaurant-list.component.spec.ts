import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListScreen } from './restaurant-list.component';

describe('RestaurantListComponent', () => {
  let component: RestaurantListScreen;
  let fixture: ComponentFixture<RestaurantListScreen>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantListScreen],
    });
    fixture = TestBed.createComponent(RestaurantListScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
