import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _onProgressbarVisibilityChange: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor() { }

  get onProgressbarVisibilityChange(): Observable<boolean> {
    return this._onProgressbarVisibilityChange.asObservable();
  }

  public showProgressbar(): void {
    this._onProgressbarVisibilityChange.next(true);
  }
  public hideProgressbar(): void {
    this._onProgressbarVisibilityChange.next(false);
  }
}
