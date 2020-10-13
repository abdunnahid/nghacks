import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(module => module.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'mat-table-query-reflector',
    loadChildren: () => import('./consumer-modules/mat-table-query-reflector/mat-table-query-reflector.module')
      .then(module => module.MatTableQueryReflectorModule)
  },
  {
    path: 'dynamic-browser-title',
    loadChildren: () => import('./consumer-modules/dynamic-browser-title/dynamic-browser-title.module')
      .then(module => module.DynamicBrowserTitleModule)
  },
  {
    path: 'uploader',
    loadChildren: () => import('./consumer-modules/uploader/uploader.module')
      .then(module => module.UploaderConsumerModule)
  },
  {
    path: 'info-dialog',
    loadChildren: () => import('./consumer-modules/info-dialog/info-dialog-consumer.module')
      .then(module => module.InfoDialogConsumerModule)
  },
  {
    path: 'image-viewer',
    loadChildren: () => import('./consumer-modules/image-viewer-consumer/image-viewer-consumer.module')
      .then(module => module.ImageViewerConsumerModule)
  },
  {
    path: 'quantity-input',
    loadChildren: () => import('./consumer-modules/quantity-input-consumer/quantity-input-consumer.module')
      .then(module => module.QuantityInputConsumerModule)
  },
  {
    path: 'rating-input',
    loadChildren: () => import('./consumer-modules/rating-input-consumer/rating-input-consumer.module')
      .then(module => module.RatingInputConsumerModule)
  },
  {
    path: 'banner-carousel',
    loadChildren: () => import('./consumer-modules/banner-carousel-consumer/banner-carousel-consumer.module')
      .then(module => module.BannerCarouselConsumerModule)
  },
  {
    path: 'overflow-carousel',
    loadChildren: () => import('./consumer-modules/overflow-carousel-consumer/overflow-carousel-consumer.module')
      .then(module => module.OverflowCarouselConsumerModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
