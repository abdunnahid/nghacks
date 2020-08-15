import { Injectable, Optional, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { interval } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { DynamicBrowserTitleConfig } from './types/browser-title.config';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DynamicBrowserTitleService {

  private _hasDynamicTitleServiceInitialized: boolean;
  private _titleChecker$: any;
  private _defaultTitle: string;
  private _document: Document;

  public set config(config: DynamicBrowserTitleConfig) {
    this._config = config;
  }

  constructor(
    @Optional() private _config: DynamicBrowserTitleConfig,
    private _router: Router,
    @Inject(DOCUMENT) private document: any,
    private _titleService: Title
  ) {
    this._document = this.document as Document;
    this.init();
    const titleElem: HTMLElement = this._document.querySelector('title');
    this._defaultTitle = titleElem?.innerText || '';
  }

  private init(): void {
    if (this._hasDynamicTitleServiceInitialized) {
      throw new Error('DynamicTitleService already initialized! Initialize it only once at the application bootstrap.');
    }
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe((route) => {
        this.check();
      });
    this._hasDynamicTitleServiceInitialized = true;
  }

  private check(): void {

    if (this._titleChecker$) { return; }

    const titleCheckingInterval$ = interval(500);

    this._titleChecker$ = titleCheckingInterval$.subscribe(val => {

      const title = this.getTitleBySelector();

      // selector text rendered on the page, setting to tab title
      if (title) {
        this.setTabTitle(title);
        this._titleChecker$.unsubscribe();
        this._titleChecker$ = null;
      }

      // maximum retries done. Couldn't found text with the selector. Stop checking
      if (val === 20) {
        if (this._titleChecker$) {
          this._titleChecker$.unsubscribe();
          this._titleChecker$ = null;
        }
      }

    });

  }

  private getTitleBySelector(): string {
    let title = '';
    try {
      const titleElem: HTMLElement = this._document.querySelector(this._config.selector);
      title = titleElem.innerText;
    }
    catch (error) {
      title = '';
    }
    return title;
  }

  private setTabTitle(title: string): void {

    if (!title) { return; }

    this._titleService.setTitle(
      (
        this._config.hasOwnProperty('prefix')
          ? this._config.prefix
          : (this._defaultTitle ? this._defaultTitle + ' - ' : '')
      )
      + title
      + (this._config.hasOwnProperty('sufix') ? this._config.sufix : '')
    );

  }

}
