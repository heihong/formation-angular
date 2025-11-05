import { Component, EventEmitter, inject, input, Input, Output } from '@angular/core';
import { Topping } from '../../models/topping';

import { Toppings as ToppingsService } from '../../services/toppings';

@Component({
  selector: 'app-toppings',
  standalone: false,
  templateUrl: './toppings.html',
  styleUrl: './toppings.scss',
})
export class Toppings {
 // @Input() public toppings: Topping[] = []
   public toppings = input<Topping[]>([]);

   public toppingsService = inject(ToppingsService)

   @Output() public topping = new EventEmitter();

  onSelectTopping(topping: Topping) {
   this.topping.emit(topping)
  }

}
