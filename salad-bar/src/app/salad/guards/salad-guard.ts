import { CanActivateFn, Router } from '@angular/router';
import { Order } from '../../services/order';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

export const saladGuard: CanActivateFn = (route, state) => {
  const order = inject(Order);
  const router = inject(Router);
  const store = inject(Store<{ app: AppState }>)
  const app = store.selectSignal(state => state.app)

  if(app().name && app().tel) {
    return true
  }else {
    router.navigate(['/'])
    return false
  }
};
