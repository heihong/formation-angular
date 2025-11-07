import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Order } from './order';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducer, AppState } from '../store/app.reducer';
import { provideStore, Store } from '@ngrx/store';

describe('Order', () => {
  let component: Order;
  let fixture: ComponentFixture<Order>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Order,
        ReactiveFormsModule,  
        MatFormField,
        MatLabel,
        MatInput,
        MatError,
        MatButton],
  providers: [provideStore({ app: appReducer })],
})
    .compileComponents();
  
    fixture = TestBed.createComponent(Order);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should have a form with two input fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.orderForm')).toBeTruthy();
    expect(compiled.querySelectorAll('mat-form-field input[matInput]')).toHaveSize(2);
  });
});
