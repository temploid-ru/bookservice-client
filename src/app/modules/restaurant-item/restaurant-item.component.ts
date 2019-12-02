import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.sass']
})
export class RestaurantItemComponent implements OnInit {
  @Input() showPoster = true;

  constructor() {
  }

  ngOnInit() {
  }

}
