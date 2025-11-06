import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes as appRoutes } from './app.routes';
import { routes as saladRoutes } from './salad/salad.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from './store/app.reducer';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter([...appRoutes, ...saladRoutes]),
    provideStore({ app: appReducer, router: routerReducer}),
    provideEffects(),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};