import { TestBed } from '@angular/core/testing';

import { Order } from './order';
import { HttpClient } from '@angular/common/http';

describe('Order', () => {
  let service: Order;
  beforeEach(() => {
    TestBed.configureTestingModule({});
  
    service = TestBed.inject(Order);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
