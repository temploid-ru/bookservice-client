import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SessionAdminResolver} from '@app/resolvers/session/session-admin.resolver';


const routes: Routes = [
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    resolve: {
      session: SessionAdminResolver
    },
  },
  // {path: '', component: GanttTimelineChartComponent},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  // {path: 'plan', loadChildren: './restaurant-plan/restaurant-plan.module#RestaurantPlanModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRouting {
}
