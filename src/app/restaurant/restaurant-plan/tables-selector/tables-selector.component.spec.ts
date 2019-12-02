import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TablesSelectorComponent} from './tables-selector.component';

describe('TablesSelectorComponent', () => {
  let component: TablesSelectorComponent;
  let fixture: ComponentFixture<TablesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TablesSelectorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
