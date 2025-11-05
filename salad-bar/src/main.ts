import { platformBrowser, BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing-module';
import { SaladModule } from './app/salad/salad-module';
import { App } from './app/app';

bootstrapApplication(App, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, SaladModule),
        provideBrowserGlobalErrorListeners(), provideHttpClient(),
    ]
})
  .catch(err => console.error(err));
