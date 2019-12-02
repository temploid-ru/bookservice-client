import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PopupTableSettingsComponent} from '../_popups/popup-table-settings/popup-table-settings.component';
import {take} from 'rxjs/operators';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';

@Component({
  selector: 'app-tables-selector',
  templateUrl: './tables-selector.component.html',
  styleUrls: ['./tables-selector.component.sass']
})
export class TablesSelectorComponent implements OnInit {
  @Output() selectTable = new EventEmitter<IRestaurantTable>();

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  addTable(e: MouseEvent) {
    e.preventDefault();
    this.matDialog.open(PopupTableSettingsComponent, {})
      .beforeClosed()
      .pipe(take(1))
      .subscribe((table: IRestaurantTable) => {
        this.selectTable.emit(table);
      });
  }
}
