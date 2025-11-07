import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salad } from './salad';
import { Toppings as Toppings_1 } from '../toppings/toppings';
import { AsyncPipe } from '@angular/common';
import { Topping } from '../../models/topping';
import { Toppings } from '../../services/toppings';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';



describe('Salad', () => {
  let component: Salad;
  let fixture: ComponentFixture<Salad>;
  const mockToppings:Topping[] = [
        { id: 1, name: 'Cheese', price: 2 },
        { id: 2, name: 'Bacon', price: 2 },
        { id: 3, name: 'Pineapple', price: 4 },
      ];
  const toppingsService = jasmine.createSpyObj(Toppings, ['getToppings']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Salad, Toppings_1, AsyncPipe],
    providers: [provideHttpClient(), {Toppings, useValue: toppingsService }],
})
    .compileComponents();

    fixture = TestBed.createComponent(Salad);
    component = fixture.componentInstance;
    toppingsService.getToppings.and.returnValue(of(mockToppings));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
