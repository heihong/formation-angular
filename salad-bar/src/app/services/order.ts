import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Order {
  public name = signal('')
  public tel = signal('')
  
}
