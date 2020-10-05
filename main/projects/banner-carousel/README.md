# Image carousel

Image carousel for web page banner.

[Live Preview](https://ng-hack.web.app/banner-carousel)

## How to use

> Install package

```bash
npm install @nghacks/banner-carousel
```

> Import `BannerCarouselModule` to your consumer module.

```typescript
import { NgModule } from '@angular/core';
...
...
import { BannerCarouselModule } from '@nghacks/banner-carousel';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    BannerCarouselModule
  ]
})
export class ConsumerModule { }
```

> Use Component in template

```html
<banner-carousel
  (imageClick)="onimageClick($event)"
  (imageChange)="onimageChange($event)"
  [height]="280"
  [autoChangeInterval]="5000"
  [data]="data">
</banner-carousel>

```

## Inputs

```typescript

  /**
   * @description Data Source for the carousel
   * @field Required
   */
  
  @Input() data: IBannerCarouselImage[];

  /**
   * @description Height of the carousel
   * @type number that represents pixel
   * @default 280 in pixel
   */
  @Input() height = 280;

  /**
   * @description Enable/Disable auto change behavior of the carousel
   * @default true
   */
  @Input() autoChange = true;

  /**
   * @description Auto change interval of carousel
   * @type number that represents in ms(milisecond)
   * @default 5000 in ms
   */
  @Input() autoChangeInterval = 5000;

```

## Outputs

```typescript

  /**
   * @description Emits when carousel image is changed
   * @returns {IBannerCarouselImage}
   */
  @Output() imageChange = new EventEmitter<IBannerCarouselImage>();

  /**
   * @description Emits when carousel image is clicked
   * @returns {IBannerCarouselImage}
   */
  @Output() imageClick = new EventEmitter<IBannerCarouselImage>();

```

## Types

```typescript

interface IBannerCarouselImage {
  src: string;
  alt?: string;
  data?: any;
  id?: string | number;
}

```
