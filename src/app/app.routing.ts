import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SessionResolver} from '@app/resolvers/session/session.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: `./client/client.module#ClientModule`,
    resolve: {session: SessionResolver}
  },
  {
    path: 'admin',
    loadChildren: `./restaurant/restaurant.module#RestaurantModule`
  },
  {
    path: '**',
    redirectTo: '/admin/plan'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {
}
