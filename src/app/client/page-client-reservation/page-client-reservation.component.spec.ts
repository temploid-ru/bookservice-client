import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PageClientReservationComponent} from './page-client-reservation.component';

describe('PageClientReservationComponent', () => {
  let component: PageClientReservationComponent;
  let fixture: ComponentFixture<PageClientReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageClientReservationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
