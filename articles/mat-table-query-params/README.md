# Managing Angular Material table states with query params: a comprehensive guide

I am asuming you already played around with [Angular Material]([https://material.angular.io/](https://material.angular.io/)) or atleast know about it. Material [Table(MatTable)](https://material.angular.io/components/table/overview) is an Angular Material module used for visualizing data as a table view. We can make MatTable more featureful by implementing sorting & pagination using [MatSort]([https://material.angular.io/components/sort/overview](https://material.angular.io/components/sort/overview)) & [MatPaginator]([https://material.angular.io/components/paginator/overview](https://material.angular.io/components/paginator/overview)) from Angular Material. I must say, MatTable is full of features. 

Along with all these features, if I don't add another one it feels incomplete to me. And that feature is having the table states back even if we refresh the page. Angular Material did not put in place this feature, but they have some useful API's that we will use to build the feature by ourselves. We are going to build a [Directive](https://angular.io/api/core/Directive) that will take care of all the query params and table states.

> Demo

![Demo gif](https://github.com/abdunnahid/nghacks/blob/master/articles/mat-table-query-params/src/assets/demo.gif?raw=true)
> Live Preview: [https://ng-hack.web.app/mat-table-query-reflector](https://ng-hack.web.app/mat-table-query-reflector)

_**Note for Angular experts:** Though this guide is not meant for the Angular experts, I still urge you to go through and bless me with your valuable feedback_ 😇.

**Don't like bla bla bla?**
- Find the everything we coded here on [GitHub]([https://github.com/abdunnahid/nghacks/tree/master/articles/mat-table-query-params](https://github.com/abdunnahid/nghacks/tree/master/articles/mat-table-query-params)).
- The directive is also built as an Angular Library: [Here]([https://github.com/abdunnahid/nghacks/tree/master/main/projects/ngmat-table-query-reflector](https://github.com/abdunnahid/nghacks/tree/master/main/projects/ngmat-table-query-reflector))
- The library is also available on NPM: [@nghacks/ngmat-table-query-reflector]([https://www.npmjs.com/package/@nghacks/ngmat-table-query-reflector](https://www.npmjs.com/package/@nghacks/ngmat-table-query-reflector))
- This is a part of GitHub [repo](https://github.com/abdunnahid/nghacks):
{% github https://github.com/abdunnahid/nghacks %}
- Live on [web]([https://ng-hack.web.app/mat-table-query-reflector](https://ng-hack.web.app/mat-table-query-reflector))

So let's jump into coding and build a query param manager directive for MatTable. 

## Initial Setup

1. [Install Angular & create a new project]([https://angular.io/guide/setup-local](https://angular.io/guide/setup-local))

> To follow along use angular 10.x
```bash
npm install -g @angular/cli
ng new MaterialTableQueryParamExample
? Would you like to add Angular routing? (y/N) n
? Which stylesheet format would you like to use? scss
```
2. [Add Angular Material to the created project]([https://material.angular.io/guide/getting-started](https://material.angular.io/guide/getting-started))
```bash
cd MaterialTableQueryParamExample
ng add @angular/material
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes
```
3. Import RouterModule, MatTableModule, MatSortModule,MatPaginatorModule

> **app.module.ts**
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgMatTableQueryReflectorDirective } from './directives/ng-mat-table-query-reflector.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgMatTableQueryReflectorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
4. Table templating

> **app.component.html**
```html
<div class="table-container">
  <table mat-table [dataSource]="dataSource" matSort>
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Position </th>
      <td mat-cell *matCellDef="let element"> {{element.position}} </td>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
  <mat-paginator [pageSizeOptions]="[10, 5, 3]" showFirstLastButtons></mat-paginator>
</div>
```
5. Initializing table data source

> **app.component.ts**
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  displayedColumns: string[] = ['position', 'name'];
  dataSource: MatTableDataSource<PeriodicElement>;
  
  constructor() { }
  
  ngOnInit(): void {
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen' },
  { position: 2, name: 'Helium' },
  { position: 3, name: 'Lithium' },
  { position: 4, name: 'Beryllium' },
  { position: 5, name: 'Boron' },
  { position: 6, name: 'Carbon' },
  { position: 7, name: 'Nitrogen' },
  { position: 8, name: 'Oxygen' },
  { position: 9, name: 'Fluorine' },
  { position: 10, name: 'Neon' }
];
```
6. Add some styling to make it look not too bad

> **app.component.scss**
```css
.table-container {
  padding: 50px;
  table {
    width: 100%;
    margin: 10px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
  }
}
```
7. Run the project
```bash
ng serve --o
```
The initial setup is done. It should render a table. You can change page index, page size, and sorting. If you refresh the page all your changes are gone. That's the problem we are going to fix next.

## Cut the crap, show me the real thing
As planned we will solve them with a [directive]([https://angular.io/api/core/Directive](https://angular.io/api/core/Directive)). Let's first create one.

### Creating the directive
 Create a directive using angular CLI. Let's name it NgMatTableQueryReflector and place it under /directives directory.
```bash
ng generate directive directives/NgMatTableQueryReflector
```
This command created a directive and registered it to AppModule declarations. The directive should look something like,
```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appNgMatTableQueryReflector]'
})
export class NgMatTableQueryReflectorDirective {
  constructor() { }
}
```
Put this directive on table tag on template.
```html
<table  mat-table  [dataSource]="dataSource"  matSort  appNgMatTableQueryReflector>
```
Now we have access to all the other directives and input properties in our _**NgMatTableQueryReflectorDirective.**_

### Identifying the requirements 
Think about the requirements. What behavior we actually want? Let's focus on the sorting behavior for now,
1. If a user changes the active sort column or the sort direction, changes should reflect on the URL with query params.

> For example user sorted the table by position in descending order. Our URL should change and look something like: 

> http://localhost:4200/?sort_active=position&sort_direction=desc

2. If the user reloads the page with those changes, the table should render sorted by position in descending order.

### Building the logic
What are the things we actually need to fulfill the requirements? 
1. We need a sort change event source. 

> Why? That source will let us know when the user changes the sorting then we can update our URL.

2. Another thing we need is to set sorting states.

> Why? Because, on the app load, if we find anything for the sorting on URL, we need to update the sorting.

And think what? Angular Material already has that API's to make our life easier. 
What is that API? It is _**MatTableDataSource**_ that we get as an input from the template named as _**dataSource**_.

### Implementation

#### Listen to sort change event & update URL 
Take _**dataSource**_ as an input. Inject the routing dependencies to constructor

```typescript
@Input() dataSource: MatTableDataSource<any>;

constructor(
  private _router: Router,
  private _activatedRoute: ActivatedRoute
) { }
```

First, listen to the sort change events on _**ngAfterViewInit**_ lifecycle hook.

```typescript
ngAfterViewInit(): void {
  this.listenToStateChangeEvents();
}
private listenToStateChangeEvents(): void {
  this.dataSource.sort.sortChange.subscribe((sortChange: Sort) => {
    // Update URL with the changed sort states
  });
}
```
Then update the URL query params

```typescript
private listenToStateChangeEvents(): void {
  this.dataSource.sort.sortChange.subscribe((sortChange: Sort) => {
    this._applySortChangesToUrlQueryParams(pageChange);
  });
}
private _applySortChangesToUrlQueryParams(sortChange: Sort): void {
  const sortingAndPaginationQueryParams = {
    sort_active: sortChange.active,
    sort_direction: sortChange.direction,
  };
  this._router.navigate([], { 
   queryParams: sortingAndPaginationQueryParams, 
   queryParamsHandling: 'merge' 
  });
}
```
> Note: We used `queryParamsHandling:  'merge'`. We don't want our sort query params to break other query params on the URL.

Check that out changing the sorting states. It reflects on the URL, right?
Cool! let's make the URL reflects on the table too.

#### Apply initial sort query params to table

Read query params on app load in _**ngAfterViewInit**_ lifecycle hook.

```typescript
  ngAfterViewInit(): void {
    this._initialSetup();
    this.listenToStateChangeEvents();
  }

  private initialSetup(): void {
    const activeSortQuery = this.activeSortQuery;
    console.log("NgMatTableQueryReflectorDirective -> _initialSetup -> activeSortQuery", activeSortQuery);
  }

  private get activeSortQuery(): { sort_active: string, sort_direction: 'asc' | 'desc' } {
    const queryParams = this._activatedRoute.snapshot.queryParams;
    if (queryParams.hasOwnProperty('sort_active') && queryParams.hasOwnProperty('sort_direction')) {
      return {
        sort_active: queryParams.sort_active,
        sort_direction: queryParams.sort_direction
      };
    }
    return;
  }
```
Now we should get our sort query params inside _**initialSetup()**_. But if you try reloading the page, you can see `undefined` on the console though we have query params present on the URL! 

Because we used `this._activatedRoute.snapshot` to get query params. `snapshot.queryParams` returns query params present at that moment when it is called. The moment we called `snapshot`, Angular router is not aware of the query params. So it returns `undefined` instead of the query params. We could use `this._activatedRoute.paramMap`. But this emits value on every URL param change. We don't need that, we only need to know the query params on app load. So let's fix it.

#### Here comes the Hack

We will fix this by waiting until the angular router initializes the query params. 
```typescript
  private waitForQueryParamsToLoad(): Promise<void> {

    if (!window.location.search) { return; }

    const titleCheckingInterval$ = interval(500);
    let subscription: Subscription;

    return new Promise((resolve) => {
      subscription = titleCheckingInterval$.subscribe(val => {
        if (Object.values(this._activatedRoute.snapshot.queryParams).length > 0) {
          subscription.unsubscribe();
          return resolve();
        }
      });
    });
  }
```
We decided to wait only if we find query params in `window.location`, otherwise no need to wait. `window.location` is available even before angular loads. So no tension about loading `window.location` this time. We used a handy tool [`interval`]([https://www.learnrxjs.io/learn-rxjs/operators/creation/interval](https://www.learnrxjs.io/learn-rxjs/operators/creation/interval)) from [**rxjs**]([[https://rxjs.dev/](https://rxjs.dev/)]) to check with an interval.

> _**Note:** Please consider using the `window` object directly on Angular. Directly using `window` is not a good idea!_

Call this method we just wrote before getting the query params. `await` for `waitForQueryParamsToLoad()` and `async` for `initialSetup()`.
```typescript
  private async initialSetup(): Promise<void> {
	// HACK
    await this.waitForQueryParamsToLoad();
    const activeSortQuery = this.activeSortQuery;
    console.log("NgMatTableQueryReflectorDirective -> _initialSetup -> activeSortQuery", activeSortQuery);
  }
```
Now our `activeSortQuery` getter returns an expected value. Nice!

The last thing we need is to apply our sort states from query param to the `MatSort`.
```typescript
  private async initialSetup(): Promise<void> {
    // HACK
    await this.waitForQueryParamsToLoad();

    const activeSortQuery = this.activeSortQuery;
    if (!activeSortQuery) { return; }

    const sortable: MatSortable = {
      id: activeSortQuery.sort_active,
      start: activeSortQuery.sort_direction,
      disableClear: true
    };

    this.dataSource.sort.sort(sortable);
  }
```
Now everything should work fine but no it doesn't! There is an [issue](https://github.com/angular/components/issues/10242) with the `MatSort`. We need to do another hack! This [hack](https://github.com/angular/components/issues/10242#issuecomment-421490991) was invented on that issue. 

{% github https://github.com/angular/components/issues/10242 %}
{% github https://github.com/angular/components/issues/10242#issuecomment-421490991 %}

Let's apply that hack.
```typescript
  private async initialSetup(): Promise<void> {
    // HACK 1
    await this.waitForQueryParamsToLoad();

    const activeSortQuery = this.activeSortQuery;
    if (!activeSortQuery) { return; }

    const sortable: MatSortable = {
      id: activeSortQuery.sort_active,
      start: activeSortQuery.sort_direction,
      disableClear: true
    };

    this.dataSource.sort.sort(sortable);

    // HACK 2
    const activeSortHeader = this.dataSource.sort.sortables.get(activeSortQuery.sort_active);
    activeSortHeader['_setAnimationTransitionState']({
      fromState: this.dataSource.sort.direction,
      toState: 'active',
    });
  }
```
At last, we are done with the sorting.

Pagination is similar to the sorting we just implemented. One thing that is different from sorting is that we don't need any special hack for pagination. If you followed along with the guide and understood every piece of it, it will be bread and butter for you to implement pagination. Also, think about some scenarios like an advanced filter for the table. You can manage advance filters from query params with angular reactive forms using a similar idea.

> If you couldn't build the pagination by yourself, the resources below may help you: 

- Find the everything we coded here on [GitHub]([https://github.com/abdunnahid/nghacks/tree/master/articles/mat-table-query-params](https://github.com/abdunnahid/nghacks/tree/master/articles/mat-table-query-params)).
- The directive is also built as an Angular Library: [Here]([https://github.com/abdunnahid/nghacks/tree/master/main/projects/ngmat-table-query-reflector](https://github.com/abdunnahid/nghacks/tree/master/main/projects/ngmat-table-query-reflector))
- The library is also available on NPM: [@nghacks/ngmat-table-query-reflector]([https://www.npmjs.com/package/@nghacks/ngmat-table-query-reflector](https://www.npmjs.com/package/@nghacks/ngmat-table-query-reflector))
- This is a part of GitHub [repo](https://github.com/abdunnahid/nghacks):
{% github https://github.com/abdunnahid/nghacks %}
- Live on [web]([https://ng-hack.web.app/mat-table-query-reflector](https://ng-hack.web.app/mat-table-query-reflector))

 That's it for now. Let me know what you think about the hacks I used. If you know any better solution you must let me know. You can also contribute to the [repo](https://github.com/abdunnahid/nghacks) with your improvements or content. 

For any queries, please comment or DM on [Twitter]([https://twitter.com/abdunnahid](https://twitter.com/abdunnahid)).


