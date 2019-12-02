import {IRestaurantTable} from '../../app/interfaces/restaurant-table.interface';

export type AdminRestaurantTable = IRestaurantTable;

/**
 * A factory function that creates AdminRestaurantTables
 */
export function createAdminRestaurantTable(params: Partial<AdminRestaurantTable>) {
  return {...params} as AdminRestaurantTable;
}
