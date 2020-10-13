# Overflow carousel

Show overflowing content as carousel.

[Live Preview](https://ng-hack.web.app/overflow-carousel)

## How to use

> Install package

```bash
npm install @nghacks/overflow-carousel
```

> Import `OverflowCarouselModule` to your consumer module.

```typescript
import { NgModule } from '@angular/core';
...
...
import { OverflowCarouselModule } from '@nghacks/overflow-carousel';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    OverflowCarouselModule
  ]
})
export class ConsumerModule { }
```

> Use Component in template

```html
<overflow-carousel>

  <button slide-left-button>
    <mat-icon>navigate_before</mat-icon>
  </button>

  <carousel-item *ngFor="let img of images" class="image-card">
    <img [src]="img" width="100%" height="100%">
  </carousel-item>

  <button slide-right-button>
    <mat-icon>navigate_next</mat-icon>
  </button>

</overflow-carousel>

<!-- Or -->
<!-- To Use custom slider buttons position, use component reference on the template -->
<div>
  <button [disabled]="!imageCarousel.sliderButtonsVisibility.showLeftSlider" (click)="imageCarousel.previous()">
    Previous
  </button>
  <button [disabled]="!imageCarousel.sliderButtonsVisibility.showRightSlider" (click)="imageCarousel.next()">
    Next
  </button>
</div>

<overflow-carousel #imageCarousel="overflowCarousel">
  <carousel-item *ngFor="let img of images" class="image-card">
    <img [src]="img" width="100%" height="100%">
  </carousel-item>
</overflow-carousel>

```

## Styles

```css
.image-card {
  width: 300px;
  height: 300px;
  margin: 0 20px 20px 0;

  &:last-of-type {
    margin-right: 0;
  }
}

```

## Inputs

```typescript

  /**
   * Sliding animation time
   * @type number
   * @default .4
   */
  @Input() transitionDuration = .4;

  /**
   * Percentage of the content to move on each slide
   * @type number
   * @field value between 0.1 - 1 with the aspect of container width
   */
  @Input() slidePercentage = .8;

```


## Types

```typescript

class SliderButtonVisibilty {
  showLeftSlider: boolean;
  showRightSlider: boolean;

  updateSliderButtonVisibilty(
    containerWidth: number,
    contentWidth: number,
    translatedPosition: number
  );
}

```
