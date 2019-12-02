import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PopupTableSettingsComponent} from './popup-table-settings.component';

describe('PopupTableSettingsComponent', () => {
  let component: PopupTableSettingsComponent;
  let fixture: ComponentFixture<PopupTableSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopupTableSettingsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTableSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
