import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRestaurantAddReservationComponent } from './popup-restaurant-add-reservation.component';

describe('PopupRestaurantAddReservationComponent', () => {
  let component: PopupRestaurantAddReservationComponent;
  let fixture: ComponentFixture<PopupRestaurantAddReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRestaurantAddReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRestaurantAddReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
