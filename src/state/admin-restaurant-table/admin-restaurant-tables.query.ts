import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {AdminRestaurantTablesStore, AdminRestaurantTablesState} from './admin-restaurant-tables.store';
import {AdminRestaurantTable} from './admin-restaurant-table.model';

@Injectable({
  providedIn: 'root'
})
export class AdminRestaurantTablesQuery extends QueryEntity<AdminRestaurantTablesState, AdminRestaurantTable> {

  constructor(protected store: AdminRestaurantTablesStore) {
    super(store);
  }

}
