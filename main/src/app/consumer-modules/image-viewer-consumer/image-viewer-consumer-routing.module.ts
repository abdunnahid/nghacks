import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageViewerConsumerComponent } from './image-viewer-consumer.component';

const routes: Routes = [
  {
    path: '',
    component: ImageViewerConsumerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageViewerRoutingModule { }
