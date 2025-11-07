import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Topping } from '../models/topping';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Toppings {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://retoolapi.dev/XDaOzA/';
   private availableToppings: Topping[] = [];

  getToppings() {
    return this.http.get<Topping[]>(`${this.baseUrl}toppings`).pipe(
      tap((toppings) => {
        this.availableToppings = toppings;
      }
    ))
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


  // Simulated "backend search" for toppings
  searchToppings(query: string): Observable<Topping[]> {
    const lowercaseQuery = query.toLowerCase();
    
    // Filter locally available toppings that include the query
    const filtered = this.availableToppings.filter(t =>
      t.name.toLowerCase().includes(lowercaseQuery)
    );
    
    // Simulate a 1-second delay to mimic backend latency
    return of(filtered).pipe(delay(1000)); // simulate latency
  }

}
