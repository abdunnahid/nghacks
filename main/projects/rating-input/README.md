# Rating Input

Rating input for shopping cart.

[Live Preview](https://ng-hack.web.app/rating-input)

## How to use

> Install package

```bash
npm install @nghacks/rating-input
```

> Import `RatingInputModule` to your consumer module.

```typescript
import { NgModule } from '@angular/core';
...
...
import { RatingInputModule } from '@nghacks/rating-input';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    RatingInputModule
  ]
})
export class ConsumerModule { }
```

> Use with reactive form or template driven form

```html
<!-- Basic -->
<rating-input></rating-input>

<!-- Reactive Form -->
<rating-input formControlName="rating"></rating-input>

<!-- Template Driven Form -->
<rating-input [(ngModel)]="rating"></rating-input>

```

## Inputs

```typescript

  /**
   * @description Use MatIcons
   */
  @Input() ratedIcon = 'star';
 
  /**
   * @description Use MatIcons
   */
  @Input() notRatedIcon = 'star_outline';

  /**
   * @description Rated icon color
   */
  @Input() ratedIconColor = '#faca51';

  /**
   * @description Enable/Disable animation
   */
  @Input() animation = true;

  /**
   * @description Count of rating
   */
  @Input() ratingCount = 5;

  /**
   * @description Disables rating input
   * @note Can be used with reactive for api
   */
  @Input() disabled: boolean;

```

## Outputs

```typescript

  /**
   * @description Emits on input change
   */
  @Output() ratingChange: number;

```
