import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {IRestaurantTableTimeline} from '@interfaces/restaurant-table.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline-item',
  template: `
    <div class="d-flex align-items-center">
      <img src="./assets/icons/icon-timeline-person.svg" alt="">
      <span class="fw-fz-11 fw-color-white ml-1">{{timeline.guestsCount}}</span>
    </div>
  `,
  styleUrls: ['./timeline-item.component.sass']
})
export class TimelineItemComponent implements OnInit {
  @Input() timeline: IRestaurantTableTimeline;
  @Input() gridSettings: { gridWidth: number, gridSteps: number, minuteFactor: number, defaultGridWidth: number };
  @Input() hoursGrid;

  linebreakOffset = 2;

  constructor(private _elRef: ElementRef,
              private _renderer: Renderer2) {
  }

  ngOnInit() {
    this._renderer.setStyle(
      this._elRef.nativeElement,
      'left',
      `${(this.gridSettings.minuteFactor * (Math.round(moment.duration(moment(this.timeline.date_start).diff(moment(this.hoursGrid[0].value))).asMinutes())) + this.linebreakOffset) / (this.gridSettings.gridSteps * Math.max(this.gridSettings.gridWidth, this.gridSettings.defaultGridWidth)) * 100}%`
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'width',
      `${(Math.abs(moment.duration(moment(this.timeline.date_end).diff(moment(this.timeline.date_start))).asMinutes()) * this.gridSettings.minuteFactor - this.linebreakOffset * 2) / (this.gridSettings.gridSteps * Math.max(this.gridSettings.gridWidth, this.gridSettings.defaultGridWidth)) * 100}%`
    );
  }

}
