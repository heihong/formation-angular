import { TestBed } from '@angular/core/testing';

import { Toppings } from './toppings';
import { provideHttpClient } from '@angular/common/http';
import {  HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Topping } from '../models/topping';

describe('Toppings', () => {
  let service: Toppings;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(Toppings);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('getToppings() should return toppings list', (done: DoneFn) => {
    const mockToppings:Topping[] = [
      { id: 1, name: 'Cheese', price: 2 },
      { id: 2, name: 'Bacon', price: 2 },
      { id: 3, name: 'Pineapple', price: 4 },
    ];

    service.getToppings().subscribe((toppings) => {
      expect(toppings).toEqual(mockToppings);
      done();
    });

    const req = httpTestController.expectOne(
      'https://retoolapi.dev/XDaOzA/toppings'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockToppings);

    httpTestController.verify();
  });
});
