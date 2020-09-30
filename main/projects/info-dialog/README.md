# Info Dialog

Shows detail information on a dialog/modal.

[Live Preview](https://ng-hack.web.app/info-dialog)

## How to use

> Install package

```bash
npm install @nghacks/info-dialog
```

> Import `InfoDialogModule` to your consumer module like `ConsumerModule`

```typescript
import { NgModule } from '@angular/core';
...
...
import { InfoDialogModule } from '@nghacks/info-dialog';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    InfoDialogModule
  ]
})
export class ConsumerModule { }
```

> Use component on html template

```html

<!-- Place it anywhere -->
<ng-container *ngTemplateOutlet="userStatusInfo"></ng-container>

<!-- Get as template ref -->
<ng-template #userStatusInfo>
  <info-dialog>
    <mat-icon info-dialog-icon color="accent" matTooltip="Click to see details">info</mat-icon>
    <info-title>Status Info</info-title>

    <info-section>
      <info-section-title>User Status</info-section-title>
      <info-item>
        <info-label>
          <span class="color-active">Active</span>
        </info-label>
        <info-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit sequi atque dolores, iure ex nemo?
        </info-content>
      </info-item>

      <info-item>
        <info-label>
          <span class="color-inactive">Inactive</span>
        </info-label>
        <info-content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio blanditiis doloribus sequi.
        </info-content>
      </info-item>

      <info-item>
        <info-label>
          <span class="color-warn">Pending</span>
        </info-label>
        <info-content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error iure earum facere quidem assumenda
          fugit odit aperiam quisquam hic.
        </info-content>
      </info-item>
    </info-section>

    <info-section>
      <info-section-title>Subscription Status</info-section-title>

      <info-item>
        <info-label>
          <span class="color-active">Active</span>
        </info-label>
        <info-content>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, repellat.
        </info-content>
      </info-item>
      <info-item>

        <info-label>
          <span class="color-inactive">Inactive</span>
        </info-label>
        <info-content>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae atque eaque tempore laudantium!
        </info-content>
      </info-item>

    </info-section>

  </info-dialog>
</ng-template>
```
