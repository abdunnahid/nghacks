import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _sidenav: MatDrawer;
  private _hasLayoutServiceInit: boolean;

  constructor() { }

  initLayoutService(sidenavDrawer: MatDrawer): void {
    if (this._hasLayoutServiceInit) {
      throw new Error('LayoutService already initialized. Please import it only once from LayoutComponent');
    }
    this._sidenav = sidenavDrawer;
    this._hasLayoutServiceInit = true;
  }

  get sidenav(): MatDrawer {
    return this._sidenav;
  }
}
