# Quantity Input

Quantity input for shopping cart.

[Live Preview](https://ng-hack.web.app/quantity-input)

## How to use

> Install package

```bash
npm install @nghacks/quantity-input
```

> Import `QuantityInputModule` to your consumer module.

```typescript
import { NgModule } from '@angular/core';
...
...
import { QuantityInputModule } from '@nghacks/quantity-input';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    QuantityInputModule
  ]
})
export class ConsumerModule { }
```

> Use with reactive form or template driven form

```html
<!-- Basic -->
<quantity-input></quantity-input>

<!-- Reactive Form -->
<quantity-input formControlName="quantity"></quantity-input>

<!-- Template Driven Form -->
<quantity-input [(ngModel)]="quantity"></quantity-input>

```

## Inputs

```typescript

  /**
   * @description Use Mat Color `color='accent' / color='primary`
   */
  @Input() color: string;

  /**
   * @description Max limit of quantity
   */
  @Input() limit = 10000000;

  /**
   * @description Disables quantity input
   * @note Can be used with reactive for api
   */
  @Input() disabled: boolean;

```
## Outputs

```typescript

  /**
   * @description Emits on input change
   */
  @Output() quantityChange: number;

```

