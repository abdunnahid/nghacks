import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerCarouselConsumerRoutingModule } from './banner-carousel-consumer-routing.module';
import { BannerCarouselConsumerComponent } from './banner-carousel-consumer.component';
import { ConsumerCommonModule } from '../consumer-common/consumer-common.module';
import { BannerCarouselModule } from 'banner-carousel';

@NgModule({
  declarations: [BannerCarouselConsumerComponent],
  imports: [
    CommonModule,
    BannerCarouselConsumerRoutingModule,
    ConsumerCommonModule,
    BannerCarouselModule
  ]
})
export class BannerCarouselConsumerModule { }
