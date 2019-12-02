import {Component, Input, OnInit} from '@angular/core';
import {LocationStrategy} from "@angular/common";

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.sass']
})
export class ClientHeaderComponent implements OnInit {
  @Input() title: string;

  constructor(private _location: LocationStrategy) {
  }

  ngOnInit() {
  }

  goBack(e: MouseEvent) {
    e.preventDefault();

    this._location.back();
  }

}
