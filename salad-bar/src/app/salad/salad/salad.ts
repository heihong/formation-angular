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
export class Salad implements OnInit{
  public order = inject(Order)
  public toppings = inject(Toppings)
  protected toppingList = signal<Topping[]>([])

  ngOnInit(): void {
    this.toppings.getToppings().subscribe(toppings => {
      this.toppingList.set(toppings);
    })
  }
}
