import { Component, inject, OnInit, signal } from '@angular/core';
import { Order } from '../../services/order';
import { Toppings } from '../../services/toppings';
import { Topping } from '../../models/topping';


@Component({
  selector: 'app-salad',
  standalone: false,
  templateUrl: './salad.html',
  styleUrl: './salad.scss',
})
export class Salad{
  public order = inject(Order)
  public toppings = inject(Toppings)

  public toppings$ = this.toppings.getToppings();

  onSelectTopping(topping: Topping) {
   this.toppings.chooseTopping(topping)
  }
}
