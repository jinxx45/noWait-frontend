import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPicksCardComponent } from './top-picks-card.component';

describe('TopPicksCardComponent', () => {
  let component: TopPicksCardComponent;
  let fixture: ComponentFixture<TopPicksCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopPicksCardComponent]
    });
    fixture = TestBed.createComponent(TopPicksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
