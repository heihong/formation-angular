import { Component, input, Input } from '@angular/core';
import { Topping } from '../../models/topping';

@Component({
  selector: 'app-toppings',
  standalone: false,
  templateUrl: './toppings.html',
  styleUrl: './toppings.scss',
})
export class Toppings {
 // @Input() public toppings: Topping[] = []
   public toppings = input<Topping[]>([]);
}
