import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoDialogRoutingModule } from './info-dialog-consumer-routing.module';
import { InfoDialogConsumerComponent } from './component/info-dialog-consumer/info-dialog-consumer.component';
import { InfoDialogModule } from 'info-dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { ConsumerCommonModule } from '../consumer-common/consumer-common.module';

@NgModule({
  declarations: [InfoDialogConsumerComponent],
  imports: [
    CommonModule,
    InfoDialogRoutingModule,
    ConsumerCommonModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatMenuModule,
    InfoDialogModule
  ]
})
export class InfoDialogConsumerModule { }
