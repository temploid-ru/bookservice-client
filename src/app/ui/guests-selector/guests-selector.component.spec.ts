import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GuestsSelectorComponent} from './guests-selector.component';

describe('GuestsSelectorComponent', () => {
  let component: GuestsSelectorComponent;
  let fixture: ComponentFixture<GuestsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GuestsSelectorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
