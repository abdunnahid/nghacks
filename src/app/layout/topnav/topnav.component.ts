import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  @Input() hideMenuToggleButton: boolean;

  constructor(
    private _layoutService: LayoutService
  ) { }

  ngOnInit(): void {
  }

  // Template methods
  openSideNav(): void {
    this._layoutService.sidenav.open();
    setTimeout(() => {
      this.hideMenuToggleButton = true;
    }, 100);
  }

}
