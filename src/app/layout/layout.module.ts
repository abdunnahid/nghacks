import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { NoticeComponent } from './notice/notice.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    LayoutComponent,
    ProgressbarComponent,
    SidenavComponent,
    TopnavComponent,
    NoticeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
