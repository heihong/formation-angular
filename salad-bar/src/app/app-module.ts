import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SaladModule } from './salad/salad-module';
import { Order } from './order/order';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
    declarations: [App],
    imports: [
    BrowserModule,
    AppRoutingModule,
    SaladModule,
    Order
],
    providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
    bootstrap: [App],
})
export class AppModule {}
