import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GanttTimelineChartComponent} from './gantt-timeline-chart.component';

describe('GanttTimelineChartComponent', () => {
  let component: GanttTimelineChartComponent;
  let fixture: ComponentFixture<GanttTimelineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GanttTimelineChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttTimelineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
