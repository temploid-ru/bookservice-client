import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {AdminRestaurantTablesStore} from './admin-restaurant-tables.store';
import {AdminRestaurantTablesDataService} from './admin-restaurant-tables-data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRestaurantTablesService {

  constructor(private adminRestaurantTablesStore: AdminRestaurantTablesStore,
              private adminRestaurantTablesDataService: AdminRestaurantTablesDataService) {
  }

  get() {
    // this.adminRestaurantTablesDataService.get().subscribe((entities: ServerResponse) => {
    // this.adminRestaurantTablesStore.set(entities);
    // });
  }

  add() {
    // this.adminRestaurantTablesDataService.post().subscribe((entity: ServerResponse) => {
    // this.adminRestaurantTablesStore.add(entity);
    // });
  }

}
