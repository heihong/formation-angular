import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedMaterialModule } from '../shared-material-module';
import { SaladRoutingModule } from './salad-routing-module';
import { Salad } from './salad/salad';
import { Toppings } from './toppings/toppings';


@NgModule({
  declarations: [
    Salad,
    Toppings
  ],
  imports: [
    CommonModule,
    SaladRoutingModule,
    AsyncPipe,
    SharedMaterialModule
  ]
})
export class SaladModule { }
