import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Order } from '../../services/order';
import { Toppings } from '../../services/toppings';
import { Topping } from '../../models/topping';
import { Toppings as Toppings_1 } from '../toppings/toppings';
import { AsyncPipe } from '@angular/common';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  merge,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.html',
  styleUrl: './salad.scss',
  imports: [Toppings_1, AsyncPipe],
})
export class Salad implements OnInit {
  public order = inject(Order);
  public toppings = inject(Toppings);

  public toppings$ = this.toppings.getToppings();

  public toppingsChoosen = this.toppings.chosenToppings; // passe la référence

  searchTerm$ = new Subject<string>();

  // Called from the input field to push new search term
  onSearch(term: string) {
    this.searchTerm$.next(term);
  }

  ngOnInit() {
    // Set up reactive stream for search input
    this.toppings$ = merge(
      this.toppings.getToppings(),
      this.searchTerm$.pipe(
        debounceTime(300), // Wait 300ms after user stops typing
        distinctUntilChanged(), // Only continue if the value changed

        /**
         * Use switchMap to cancel previous HTTP call if a new search term arrives
         * This means only the latest search term is processed
         * Great for "type-ahead" functionality
         */
        switchMap((query) => {
          return this.toppings.searchToppings(query);
        })
      ),
    )
  }

  onSelectTopping(topping: Topping) {
    this.toppings.chooseTopping(topping);
  }

  onRemoveTopping(index: number) {
    this.toppings.removeTopping(index);
  }

  total = computed<number>(() => {
    return this.toppingsChoosen().reduce((total, num) => total + num.price, 0);
  });
}
