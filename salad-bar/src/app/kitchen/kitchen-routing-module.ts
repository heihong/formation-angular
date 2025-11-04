import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenModule } from './kitchen-module';
import { Kitchen } from './kitchen/kitchen';

const routes: Routes = [{
  path:'',
  component: Kitchen
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenRoutingModule { }
