import { NgModule } from '@angular/core';
import { OverflowCarouselComponent } from './overflow-carousel.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { CommonModule } from '@angular/common';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@NgModule({
  declarations: [
    OverflowCarouselComponent,
    CarouselItemComponent
  ],
  imports: [
    CommonModule,
    AngularResizedEventModule
  ],
  exports: [
    OverflowCarouselComponent,
    CarouselItemComponent
  ]
})
export class OverflowCarouselModule { }
