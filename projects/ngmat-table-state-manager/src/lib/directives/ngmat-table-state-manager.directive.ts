import { Directive, Input, OnInit, OnDestroy, Inject, Optional } from '@angular/core';
import { MatSort, Sort, MatSortable } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[ngMatSortQueryParams], [ngMatSqp]'
})
export class NgMatTableStateManagerDirective implements OnInit, OnDestroy {

  private unsubscribeAll$: Subject<any> = new Subject();

  @Input() matSortActive: string;
  @Input() matSortDirection: 'asc' | 'desc';

  constructor(
    private matSort: MatSort,
    private router: Router,
    @Optional() @Inject('window') private _window?: Window
  ) {
    this._window = this._window || window;
  }

  ngOnInit(): void {

    this._initialSetup();

    this.matSort.sortChange
      .pipe(
        takeUntil(this.unsubscribeAll$)
      )
      .subscribe((sortChange: Sort) => {
        this._applyStateChangesToUrlQueryParams(sortChange);
      });
  }

  private _initialSetup(): void {

    const activeQuerySort = this.isSortQueryActive();

    const sortable: MatSortable = {
      id: activeQuerySort ? (activeQuerySort.sort_direction ? activeQuerySort.sort_active : null) : this.matSortActive,
      start: activeQuerySort ? (activeQuerySort.sort_direction || null) : this.matSortDirection,
      disableClear: true
    };

    this.matSort.sort(sortable);

  }

  private isSortQueryActive(): { sort_active: string, sort_direction: 'asc' | 'desc' } {

    const queryString = this._window.location.search.substring(1);
    if (!queryString) { return; }

    const queryParams = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

    if (queryParams.hasOwnProperty('sort_active') || queryParams.hasOwnProperty('sort_direction')) {
      return {
        sort_active: queryParams.sort_active,
        sort_direction: queryParams.sort_direction
      };
    }

    return;
  }

  private _applyStateChangesToUrlQueryParams(sortChange: Sort): void {

    const sortingAndPaginationQueryParams = {
      sort_active: sortChange.active,
      sort_direction: sortChange.direction,
    };

    this.router.navigate([], { queryParams: sortingAndPaginationQueryParams, queryParamsHandling: 'merge' });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }
}
