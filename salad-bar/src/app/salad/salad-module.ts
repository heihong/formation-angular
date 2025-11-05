import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { SaladRoutingModule } from './salad-routing-module';
import { Salad } from './salad/salad';
import { Toppings } from './toppings/toppings';


@NgModule({
    imports: [
    CommonModule,
    SaladRoutingModule,
    AsyncPipe,
    Salad,
    Toppings
]
})
export class SaladModule { }
