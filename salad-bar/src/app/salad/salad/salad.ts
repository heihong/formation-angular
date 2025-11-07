import { Component, computed, effect, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { Order } from '../../services/order';
import { Toppings } from '../../services/toppings';
import { Topping } from '../../models/topping';
import { Toppings as Toppings_1 } from '../toppings/toppings';
import { AsyncPipe } from '@angular/common';



@Component({
    selector: 'app-salad',
    templateUrl: './salad.html',
    styleUrl: './salad.scss',
    imports: [Toppings_1, AsyncPipe],
})
export class Salad {
  public order = inject(Order)
  public toppings = inject(Toppings)

  public toppings$ = this.toppings.getToppings();

   public toppingsChoosen = this.toppings.chosenToppings; // passe la référence

  onSelectTopping(topping: Topping) {
   this.toppings.chooseTopping(topping)
  }

  onRemoveTopping(index:number){
    this.toppings.removeTopping(index)
  }

   total = computed<number>(()=>{
    return this.toppingsChoosen().reduce((total, num) => total + num.price, 0)
   })
}
