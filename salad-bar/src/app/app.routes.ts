import { Routes } from '@angular/router';
import { Order } from './order/order';

export const routes: Routes = [
  {
    path: 'kitchen',
    loadComponent: () => import('./kitchen/kitchen/kitchen').then((c) => c.Kitchen),  // en lazy loading
  },
  {
    path:'',
    component: Order
  }
];
