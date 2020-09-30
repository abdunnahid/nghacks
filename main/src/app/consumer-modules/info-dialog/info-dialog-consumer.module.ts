import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoDialogRoutingModule } from './info-dialog-consumer-routing.module';
import { InfoDialogConsumerComponent } from './component/info-dialog-consumer/info-dialog-consumer.component';
import { InfoDialogModule } from 'info-dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [InfoDialogConsumerComponent],
  imports: [
    CommonModule,
    InfoDialogRoutingModule,
    InfoDialogModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatMenuModule
  ]
})
export class InfoDialogConsumerModule { }
