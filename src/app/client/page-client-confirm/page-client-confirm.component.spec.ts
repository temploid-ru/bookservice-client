import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PageClientConfirmComponent} from './page-client-confirm.component';

describe('PageClientConfirmComponent', () => {
  let component: PageClientConfirmComponent;
  let fixture: ComponentFixture<PageClientConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageClientConfirmComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
