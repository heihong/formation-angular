import { Component, computed, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { Topping } from '../../models/topping';

@Component({
  selector: 'app-toppings',
  standalone: false,
  templateUrl: './toppings.html',
  styleUrl: './toppings.scss',
})
export class Toppings {
 // @Input() public toppings: Topping[] = []
  public title=input('');
  public actionButton = input('');
  public toppings = input<Topping[]>([]);
  public topping = output<Topping>();

  onSelectTopping(topping: Topping) {
   this.topping.emit(topping)
  }

 

 
}
