import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PageClientContactsComponent} from './page-client-contacts.component';

describe('PageClientContactsComponent', () => {
  let component: PageClientContactsComponent;
  let fixture: ComponentFixture<PageClientContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageClientContactsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
