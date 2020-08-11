import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { INavigation } from '../navigation/navigation.interface';
import { Navigation } from '../navigation/navigation';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _onNavigationUpdate: ReplaySubject<INavigation[]> = new ReplaySubject<INavigation[]>();

  constructor() {
    this._registerNavigation(Navigation);
  }

  get onNavigationChange(): Observable<INavigation[]> {
    return this._onNavigationUpdate.asObservable();
  }

  public _registerNavigation(navigation: INavigation[]): void {
    this._onNavigationUpdate.next(navigation);
  }
}
