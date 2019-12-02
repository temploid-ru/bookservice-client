import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UiGroupSelectorComponent} from './ui-group-selector.component';

describe('UiGroupSelectorComponent', () => {
  let component: UiGroupSelectorComponent;
  let fixture: ComponentFixture<UiGroupSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiGroupSelectorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiGroupSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
