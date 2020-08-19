# Uploader

Picks image or file.

[Live Preview](https://ng-hack.web.app/uploader)

## How to use

> Install package

```bash
npm install @nghacks/uploader
```

> Import `UploaderModule` to your consumer module like `ConsumerModule`

```typescript
import { NgModule } from '@angular/core';
...
...
import { UploaderModule } from '@nghacks/uploader';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    UploaderModule
  ]
})
export class ConsumerModule { }
```

> Use component on html template

```html
<img-uploader (fileInputChange)="imageInputChange($event)"></img-uploader>

<file-uploader (fileInputChange)="fileInputChange($event)"></file-uploader>
```

## Inputs

```typescript
/**
 * @description Picker label
 * @default 'Drag image, or Choose' for image uploader
 * @default 'Drag file, or Choose' for file uploader
 * @example 'Drag your funny video, or Choose'
 */
@Input() pickerLabel: string;

/**
 * @description Hint is used to guide user
 * @example 'Max file size: 5mb'
 */
@Input() hint: string;

/**
 * @description acceptable file types
 * @default ['.jpg', '.png', '.jpeg'] for image uploader
 * @default ['.pdf', '.csv', '.doc', '.docx','.docx', '.xlsx', '.cer'] for file uploader
 * @example ['.gif'] for only gif files
 */
@Input() accept: string[];

/**
 * @description maximum file size in kb (kilobyte)
 * @default 5000 (5mb)
 */
@Input() maxSize = 5000;

/**
 * @description disables the picker
 */
@Input() disabled: boolean;

/**
 * @description min-height of the picker
 * @default 48 (in pixel)
 */
@Input() minHeight = 48;

/**
 * @description max-height of the image previewer
 * @memberof ImgUploaderComponent only
 * @default 250 (in pixel)
 */
@Input() maxHeight = 250;
```

## Inputs

```typescript
@Output() fileInputChange = new EventEmitter<FileInputChange>();
```

## Types

```typescript
export interface UploaderError {
  maxSizeExceeded: boolean;
  wrongFileType: boolean;
}

export interface FileInputChange {
  hasFile: boolean;
  fileName: string;
  base64Image: string[];
  errors: UploaderError;
}

```
