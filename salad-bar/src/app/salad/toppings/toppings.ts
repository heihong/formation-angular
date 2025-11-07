import { Component, computed, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { Topping } from '../../models/topping';
import { MatButton } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-toppings',
    templateUrl: './toppings.html',
    styleUrl: './toppings.scss',
    imports: [MatButton, CurrencyPipe],
})
export class Toppings {
 // @Input() public toppings: Topping[] = []
  public title=input('');
  public actionButton = input('');
  public toppings = input<Topping[]>([]);
  public topping = output<Topping>();
  public index = output<number>();


  onSelectTopping(topping: Topping, index:number) {
   this.topping.emit(topping)
   this.index.emit(index)
  }
 
}
