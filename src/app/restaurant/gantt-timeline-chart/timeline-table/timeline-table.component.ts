import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';

@Component({
  selector: 'app-timeline-table',
  template: '<ng-content></ng-content>',
  styleUrls: ['./timeline-table.component.sass']
})
export class TimelineTableComponent implements OnInit {
  @Input() table: IRestaurantTable;
  @Input() tableIndex: number;

  constructor(private _elRef: ElementRef) {
  }

  ngOnInit() {
  }

}
