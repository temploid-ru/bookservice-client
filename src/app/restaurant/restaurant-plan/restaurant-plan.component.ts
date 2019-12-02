import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {v4 as uuid} from 'uuid';
import {AdminRestaurantTablesService, AdminRestaurantTablesStore} from '@state/admin-restaurant-table';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';

@Component({
  selector: 'app-restaurant-plan',
  templateUrl: './restaurant-plan.component.html',
  styleUrls: ['./restaurant-plan.component.sass']
})
export class RestaurantPlanComponent implements OnInit {
  addTable$ = new BehaviorSubject<any>(undefined);
  image = new Image();

  constructor(private adminTableS: AdminRestaurantTablesService,
              private adminTableStore: AdminRestaurantTablesStore) {
  }

  ngOnInit() {
    this.adminTableStore.add(JSON.parse(localStorage.getItem('tables')));
  }

  onSelectTable(table: IRestaurantTable) {
    this.addTable$.next({...table, uuid: uuid()});
  }

  onUpdateTable(table: IRestaurantTable) {
    console.log(table);
  }

  selectPlan(event: { target: HTMLInputElement }) {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      // this.image = new Image();

      this.image.src = reader.result as string;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

}
