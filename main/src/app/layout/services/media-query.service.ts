import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaQueryService {

  activeMediaQuery: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '';
  onMediaChange: BehaviorSubject<'xs' | 'sm' | 'md' | 'lg' | 'xl' | ''> = new BehaviorSubject<'xs' | 'sm' | 'md' | 'lg' | 'xl' | ''>('');

  constructor(
    private _mediaObserver: MediaObserver
  ) {
    this.activeMediaQuery = '';
    this._init();

  }
  private _init(): void {
    this._mediaObserver.asObservable()
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((change: MediaChange[]) => {
        if (this.activeMediaQuery !== change[0].mqAlias) {
          this.activeMediaQuery = change[0].mqAlias as any;
          this.onMediaChange.next(change[0].mqAlias as any);
        }
      });
  }

}
