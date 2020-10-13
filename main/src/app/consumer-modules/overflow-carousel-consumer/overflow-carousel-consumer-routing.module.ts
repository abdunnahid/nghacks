import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverflowCarouselConsumerComponent } from './overflow-carousel-consumer.component';

const routes: Routes = [
  {
    path: '',
    component: OverflowCarouselConsumerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverflowCarouselConsumerRoutingModule { }
