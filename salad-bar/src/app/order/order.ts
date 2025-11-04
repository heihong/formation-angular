import { Component, inject } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  protected orderForm = this.fb.group({
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
    this.setTakeAway();
    if(this.takeAwayControl.value){
      (this.orderForm as UntypedFormGroup).addControl('devliveryAdress', this.devliveryAdressForm)
    } else {
      (this.orderForm as UntypedFormGroup).removeControl('devliveryAdress')
    }
   
  }
  
 
  startOrder() {
   if(this.orderForm.valid){
    this.router.navigate(['salad'])
   }
  }
}
