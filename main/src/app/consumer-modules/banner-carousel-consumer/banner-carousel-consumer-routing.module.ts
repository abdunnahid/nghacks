import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerCarouselConsumerComponent } from './banner-carousel-consumer.component';

const routes: Routes = [
  {
    path: '',
    component: BannerCarouselConsumerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerCarouselConsumerRoutingModule { }
