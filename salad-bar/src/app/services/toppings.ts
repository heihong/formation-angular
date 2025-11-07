import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Topping } from '../models/topping';

@Injectable({
  providedIn: 'root',
})
export class Toppings {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://retoolapi.dev/XDaOzA'

  constructor() {
    effect(() => { 
        console.trace('this.chosenToppings()',this.chosenToppings())
    })
   }

  getToppings() {
    return this.http.get<Topping[]>(`${this.baseUrl}/toppings`)
  }

  private chosenToppingsList = signal<Topping[]>([])

  get chosenToppings() {
    return this.chosenToppingsList.asReadonly();
  }

  chooseTopping(topping: Topping) {
    this.chosenToppingsList.update(toppings => [...toppings, topping]);
  }

  removeTopping(index: number) {
    this.chosenToppingsList.update(toppings => toppings.filter((_, indexTopping)=> indexTopping !== index));
  }


}
