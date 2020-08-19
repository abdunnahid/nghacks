import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaderRoutingModule } from './uploader-routing.module';
import { UploaderComponent } from './components/uploader/uploader.component';
import { ConsumerCommonModule } from '../consumer-common/consumer-common.module';
import { ImageUploaderComponent } from './components/uploader/image-uploader/image-uploader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { UploaderModule } from 'uploader';
import { FileUploaderComponent } from './components/uploader/file-uploader/file-uploader.component';


@NgModule({
  declarations: [UploaderComponent, ImageUploaderComponent, FileUploaderComponent],
  imports: [
    CommonModule,
    UploaderRoutingModule,
    ConsumerCommonModule,
    UploaderModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ]
})
export class UploaderConsumerModule { }
