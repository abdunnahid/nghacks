import { Directive, Input, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Sort, MatSortable } from '@angular/material/sort';
import { interval, Subscription } from 'rxjs';

@Directive({
  selector: '[appNgMatTableQueryReflector]'
})
export class NgMatTableQueryReflectorDirective implements AfterViewInit {

  @Input() dataSource: MatTableDataSource<any>;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {
    this.initialSetup();
    this.listenToStateChangeEvents();
  }

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

  private listenToStateChangeEvents(): void {
    this.dataSource.sort.sortChange.subscribe((sortChange: Sort) => {
      this._applySortChangesToUrlQueryParams(sortChange);
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

}
