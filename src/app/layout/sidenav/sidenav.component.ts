import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { NavigationService } from '../services/navigation.service';
import { INavigation } from '../navigation/navigation.interface';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navigation: INavigation[];

  constructor(
    private _navigationService: NavigationService,
    private _layoutService: LayoutService,
  ) { }

  ngOnInit(): void {
    this._navigationService.onNavigationChange.subscribe(
      (navigation: INavigation[]) => {
        this.navigation = navigation;
      });
  }


  toogleSidenav(): void {
    this._layoutService.sidenav.toggle();
  }

}
