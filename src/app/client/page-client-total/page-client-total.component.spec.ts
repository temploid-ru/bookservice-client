import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PageClientTotalComponent} from './page-client-total.component';

describe('PageClientTotalComponent', () => {
  let component: PageClientTotalComponent;
  let fixture: ComponentFixture<PageClientTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageClientTotalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
