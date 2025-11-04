import { Component, inject } from '@angular/core';
import { Order } from '../../services/order';

@Component({
  selector: 'app-salad',
  standalone: false,
  templateUrl: './salad.html',
  styleUrl: './salad.scss',
})
export class Salad {
  public order = inject(Order)
}
