import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { LayoutService } from './services/layout.service';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { MediaQueryService } from './services/media-query.service';
import { LoaderService } from './services/loader.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenavDrawer') sidenavDrawer: MatDrawer;
  loadContent: boolean;
  showProgressbar: boolean;

  constructor(
    private _layoutService: LayoutService,
    private _mediaQueryService: MediaQueryService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _router: Router,
    private _loaderService: LoaderService,
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._initLayout();
    this._layoutService.initLayoutService(this.sidenavDrawer);
    this._initProgressbar();
  }

  private _initLayout(): void {

    // Show progressbar on route change lazy loading
    this._router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        this._loaderService.showProgressbar();
      });

    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel))
      .subscribe(() => {
        if (this.sidenavDrawer.mode === 'over' && this.sidenavDrawer.opened) {
          this.sidenavDrawer.close();
        }
        this._loaderService.hideProgressbar();
      });

    // Adjusting side nav based on screen size
    this._mediaQueryService.onMediaChange
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(value => {
        if (!value) { return; }
        this._setSidenavAccordingScreenSize(value);
      });
  }

  private _setSidenavAccordingScreenSize(value: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): void {
    if (value === 'xs' || value === 'sm' || value === 'md') {
      this.sidenavDrawer.mode = 'over';
      this.sidenavDrawer.close();
    }
    else {
      this.sidenavDrawer.mode = 'side';
      this.sidenavDrawer.open();
    }
    setTimeout(() => {
      this.loadContent = true;
    }, 500);
    this._changeDetectorRef.detectChanges();
  }

  private _initProgressbar(): void {
    this._loaderService.onProgressbarVisibilityChange
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(val => {
        this.showProgressbar = val;
        this._cdr.detectChanges();
      });
  }

}
