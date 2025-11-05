import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing-module';
import { Salad } from './salad/salad';
import { Toppings } from './toppings/toppings';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    Salad,
    Toppings
  ],
  imports: [
    CommonModule,
    SaladRoutingModule,
    AsyncPipe,
    MatButtonModule
  ]
})
export class SaladModule { }
