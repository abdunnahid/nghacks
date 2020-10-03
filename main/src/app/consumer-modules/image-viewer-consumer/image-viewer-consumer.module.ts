import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageViewerRoutingModule } from './image-viewer-consumer-routing.module';
import { ImageViewerConsumerComponent } from './image-viewer-consumer.component';
import { ConsumerCommonModule } from '../consumer-common/consumer-common.module';
import { ImageViewerModule } from 'image-viewer';


@NgModule({
  declarations: [
    ImageViewerConsumerComponent
  ],
  imports: [
    CommonModule,
    ImageViewerRoutingModule,
    ConsumerCommonModule,
    ImageViewerModule
  ]
})
export class ImageViewerConsumerModule { }
