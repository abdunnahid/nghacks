# NgMatTableQueryReflector

Stores and retrieves mat table states (sorting, pagination) with url query params

## Demo
![Demo gif](https://github.com/abdunnahid/nghacks/blob/master/articles/mat-table-query-params/src/assets/demo.gif?raw=true)

[Live Preview](https://ng-hack.web.app/mat-table-query-reflector)

## How to use

> Install package

```bash
npm install @nghacks/ngmat-table-query-reflector
```

> Import `NgmatTableQueryReflectorModule` to your consumer module.

```typescript
import { NgModule } from '@angular/core';
...
...
import { NgmatTableQueryReflectorModule } from '@nghacks/ngmat-table-query-reflector';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgmatTableQueryReflectorModule
  ]
})
export class ConsumerModule { }
```

> Add directive to html template

```html
<table
  mat-table
  [dataSource]="dataSource"
  matSort
  matSortActive="name"
  matSortDirection="desc"
  NgMatTableQueryReflector
>
  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>No.</th>
    <td mat-cell *matCellDef="let element">{{element.position}}</td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
    <td mat-cell *matCellDef="let element">{{element.name}}</td>
  </ng-container>

  ... ...

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
```
