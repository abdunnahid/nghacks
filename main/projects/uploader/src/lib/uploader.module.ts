import { NgModule } from '@angular/core';
import { ImgUploaderComponent } from './components/img-uploader/img-uploader.component';
import { UploaderService } from './services/uploader.service';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    ImgUploaderComponent,
    FileUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [UploaderService],
  exports: [
    ImgUploaderComponent,
    FileUploaderComponent
  ],
})
export class UploaderModule { }
