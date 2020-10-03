import { NgModule } from '@angular/core';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ImageViewerDirective } from './directives/image-viewer.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ImageViewerComponent,
    ImageViewerDirective
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ImageViewerDirective
  ]
})
export class ImageViewerModule { }
