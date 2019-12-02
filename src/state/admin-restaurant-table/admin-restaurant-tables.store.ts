import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {AdminRestaurantTable} from './admin-restaurant-table.model';

export interface AdminRestaurantTablesState extends EntityState<AdminRestaurantTable> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'admin-restaurant-tables', idKey: 'uuid'})
export class AdminRestaurantTablesStore extends EntityStore<AdminRestaurantTablesState, AdminRestaurantTable> {

  constructor() {
    super();
  }

}

