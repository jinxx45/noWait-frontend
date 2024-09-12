import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNavFiltersComponent } from './sticky-nav-filters.component';

describe('StickyNavFiltersComponent', () => {
  let component: StickyNavFiltersComponent;
  let fixture: ComponentFixture<StickyNavFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyNavFiltersComponent]
    });
    fixture = TestBed.createComponent(StickyNavFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
