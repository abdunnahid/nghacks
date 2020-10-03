import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuantityInputConsumerComponent } from './quantity-input-consumer.component';

const routes: Routes = [
  {
    path: '',
    component: QuantityInputConsumerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuantityInputConsumerRoutingModule { }
