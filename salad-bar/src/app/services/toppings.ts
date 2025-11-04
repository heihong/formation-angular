import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Topping } from '../models/topping';

@Injectable({
  providedIn: 'root',
})
export class Toppings {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://retoolapi.dev/XDaOzA/'

  getToppings() {
    return this.http.get<Topping[]>(`${this.baseUrl}/toppings`)
  }
}
