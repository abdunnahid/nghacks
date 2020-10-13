import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverflowCarouselConsumerRoutingModule } from './overflow-carousel-consumer-routing.module';
import { OverflowCarouselConsumerComponent } from './overflow-carousel-consumer.component';
import { ConsumerCommonModule } from '../consumer-common/consumer-common.module';
import { OverflowCarouselModule } from 'overflow-carousel';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [OverflowCarouselConsumerComponent],
  imports: [
    CommonModule,
    OverflowCarouselConsumerRoutingModule,
    ConsumerCommonModule,
    OverflowCarouselModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class OverflowCarouselConsumerModule { }
