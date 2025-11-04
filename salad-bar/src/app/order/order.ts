import { Component, inject } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order as OrderService } from "./../services/order";

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private order = inject(OrderService)

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
   if(this.orderForm.valid){
    this.order.name = this.orderForm.controls.name.value;
    this.order.tel =  this.orderForm.value.tel ?? '';  // this.orderForm.value.tel || '' marche pas si this.orderForm.value.tel = 0
    this.router.navigate(['salad'])
   }
  }
}
