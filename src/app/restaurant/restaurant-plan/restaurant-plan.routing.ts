import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestaurantPlanComponent} from './restaurant-plan.component';

const routes: Routes = [
  {path: '', component: RestaurantPlanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantPlanRouting {
}
