import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDepositComponent } from './reservation-deposit.component';

describe('ReservationDepositComponent', () => {
  let component: ReservationDepositComponent;
  let fixture: ComponentFixture<ReservationDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
