import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuantityInputConsumerRoutingModule } from './quantity-input-consumer-routing.module';
import { QuantityInputConsumerComponent } from './quantity-input-consumer.component';
import { ConsumerCommonModule } from '../consumer-common/consumer-common.module';
import { QuantityInputModule } from 'quantity-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuantityInputConsumerComponent],
  imports: [
    CommonModule,
    QuantityInputConsumerRoutingModule,
    ConsumerCommonModule,
    ReactiveFormsModule,
    QuantityInputModule,
    FormsModule
  ]
})
export class QuantityInputConsumerModule { }
