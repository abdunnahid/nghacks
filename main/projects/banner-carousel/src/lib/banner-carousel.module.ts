import { NgModule } from '@angular/core';
import { BannerCarouselComponent } from './banner-carousel.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BannerCarouselService } from './banner-carousel.service';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    BannerCarouselComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    BannerCarouselService
  ],
  exports: [
    BannerCarouselComponent
  ]
})
export class BannerCarouselModule { }
