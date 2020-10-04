import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingInputConsumerRoutingModule } from './rating-input-consumer-routing.module';
import { RatingInputConsumerComponent } from './rating-input-consumer.component';
import { ConsumerCommonModule } from '../consumer-common/consumer-common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingInputModule } from 'rating-input';

@NgModule({
  declarations: [RatingInputConsumerComponent],
  imports: [
    CommonModule,
    RatingInputConsumerRoutingModule,
    ConsumerCommonModule,
    ReactiveFormsModule,
    FormsModule,
    RatingInputModule
  ]
})
export class RatingInputConsumerModule { }
