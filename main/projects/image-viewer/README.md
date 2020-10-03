# Image Viewer

Shows full size image in a overlay maintaining the aspect ratio.

[Live Preview](https://ng-hack.web.app/image-viewer)

## How to use

> Install package

```bash
npm install @nghacks/image-viewer
```

> Import `ImageViewerModule` to your consumer module.

```typescript
import { NgModule } from '@angular/core';
...
...
import { ImageViewerModule } from '@nghacks/image-viewer';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    ImageViewerModule
  ]
})
export class ConsumerModule { }
```

> Add directive to html template

```html
<!-- Basic -->
<img imageViewer src="https://picsum.photos/300/300" alt="dummy image">

<!-- Disabled -->
<img imageViewer [disabled]="true" src="https://picsum.photos/300/300" alt="dummy image">

<!-- Custom src -->
<img imageViewer="https://picsum.photos/3000/3000" src="https://picsum.photos/100/100" alt="dummy image">

<!-- Not img element -->
<button imageViewer="https://picsum.photos/300/300" alt="dummy image">View</button>

```

## Inputs

```typescript

  /**
   * @description Image source URL
   */
  @Input() src: string;

  /**
   * @description Alnernate text for image
   */
  @Input() alt: string;

  /**
   * @description Disables image viewer
   */
  @Input() disabled: boolean;

```
