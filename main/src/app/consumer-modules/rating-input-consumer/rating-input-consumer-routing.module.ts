import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatingInputConsumerComponent } from './rating-input-consumer.component';

const routes: Routes = [
  {
    path: '',
    component: RatingInputConsumerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingInputConsumerRoutingModule { }
