import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Order } from './order/order';

const routes: Routes = [
  {
    path: 'kitchen',
    loadChildren: () => import('./kitchen/kitchen-module').then((m) => m.KitchenModule),  // en lazy loading
  },
  {
    path:'',
    component: Order
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
