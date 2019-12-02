import {Component, Inject, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IRestaurantTable, RestaurantTableStatusEnum} from '@interfaces/restaurant-table.interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UiNotificationService} from '@app/ui/ui-notification/ui-notification.service';
import {ReservationService} from '@app/_services/reservation/reservation.service';

@Component({
  selector: 'app-client-plan',
  templateUrl: './client-plan.component.html',
  styleUrls: ['./client-plan.component.sass']
})
export class ClientPlanComponent implements OnInit {
  tables$: BehaviorSubject<IRestaurantTable[]> = this._reservationS.tables$;

  selectedTable: IRestaurantTable;

  constructor(private _matDialogRef: MatDialogRef<ClientPlanComponent>,
              private _notificationS: UiNotificationService,
              private _reservationS: ReservationService,
              @Inject(MAT_DIALOG_DATA) public model: IRestaurantTable) {
  }

  ngOnInit() {
    this.selectedTable = this.model;
  }

  onPreview(table: IRestaurantTable) {
    if (table.status === RestaurantTableStatusEnum.BLOCKED || !table._numGuestsEnabled) {
      this._notificationS.open({title: !table._numGuestsEnabled ? 'Столик не может вместить столько человек' : 'Столик занят'});
      return;
    }
    this.selectedTable = table;
  }

}
