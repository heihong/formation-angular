import { Component, inject } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Order as OrderService } from "./../services/order";
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { SetName, SetTel } from '../store/app.actions';

@Component({
    selector: 'app-order',
    templateUrl: './order.html',
    styleUrl: './order.scss',
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatError,
        MatButton,
    ],
})
export class Order {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private order = inject(OrderService)
  private store = inject(Store);

  protected orderForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('^0[6-7][0-9]{8}$')]],
    takeAway:[false]
  });

   protected devliveryAdressForm = this.fb.group({
      street: ['', Validators.required],
      cp: ['', Validators.required],
      city:['', Validators.required],
    });


  get takeAwayControl(){
    return this.orderForm.controls.takeAway;
  }

 get telControl(){
    return this.orderForm.controls.tel;
  }


  setTakeAway(){
    this.takeAwayControl.setValue(!this.takeAwayControl.value)
  }

  addDeliveryAdress(){
    this.devliveryAdressForm.reset();
    this.setTakeAway();
    if(this.takeAwayControl.value){
      (this.orderForm as UntypedFormGroup).addControl('devliveryAdress', this.devliveryAdressForm)
    } else {
      (this.orderForm as UntypedFormGroup).removeControl('devliveryAdress');
      
    }
   
  }
  
 
  startOrder() {
   if(this.orderForm.valid) {
    this.store.dispatch(SetName({ name: this.orderForm.controls.name.value }));
    this.store.dispatch(SetTel({ tel: this.orderForm.controls.tel.value }));
    this.router.navigate(['salad'])
   }
  }
}
