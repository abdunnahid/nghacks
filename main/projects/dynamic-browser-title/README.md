# DynamicBrowserTitle

Updates browser title dynamically & automatically on route change.

[Live Preview](https://ng-hack.web.app/dynamic-browser-title)

## How to use

> Install package

```bash
npm install @nghacks/dynamic-browser-title
```

> Import `DynamicBrowserTitleModule` to your bootstrap module like `AppModule` and pass `DynamicBrowserTitleConfig`.

```typescript
import { NgModule } from '@angular/core';
...
...
import { DynamicBrowserTitleModule } from '@nghacks/ngmat-table-query-reflector';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    DynamicBrowserTitleModule.forRoot({
      selector: '.page header h1'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## DynamicBrowserTitleConfig API

```typescript
export class DynamicBrowserTitleConfig {
  /**
   * @field Requered
   * @description Determines which element select to retrieve browser title
   */
  selector: string;

  /**
   * @field Optional
   * @default innerText found in <title></title> tag on index.html
   * @description Text that will be added before the text found by the selector
   */
  prefix?: string;

  /**
   * @field Optional
   * @description Text that will be added after the text found by the selector
   */
  sufix?: string;

}
```
## Update DynamicBrowserTitleConfig

You can also change the configurations afterwards from a module or component.

> some-feature.module.ts

```typescript
import { NgModule } from '@angular/core';
...
...
import { DynamicBrowserTitleModule } from '@nghacks/ngmat-table-query-reflector';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    DynamicBrowserTitleModule.forRoot({
      selector: '.page header h1'
    })
  ]
})
export class SomeFeatureModule { 
  construnctor(private _dynamicBrowserTitleService: DynamicBrowserTitleService) {
    this._dynamicBrowserTitleService.config = {
      selector: '#example-selectoor',
      prefix: '',
      sufix: ' | Some Feature'
    }
  }
}
```
