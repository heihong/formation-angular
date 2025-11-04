import { CanActivateFn } from '@angular/router';

export const saladGuard: CanActivateFn = (route, state) => {
  return true;
};
