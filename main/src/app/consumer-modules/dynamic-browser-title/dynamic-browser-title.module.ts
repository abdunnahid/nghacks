import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicBrowserTitleRoutingModule } from './dynamic-browser-title-routing.module';
import { DynamicBrowserTitleComponent } from './components/dynamic-browser-title/dynamic-browser-title.component';

import { ConsumerCommonModule } from '../consumer-common/consumer-common.module';


@NgModule({
  declarations: [
    DynamicBrowserTitleComponent
  ],
  imports: [
    CommonModule,
    DynamicBrowserTitleRoutingModule,
    ConsumerCommonModule
  ]
})
export class DynamicBrowserTitleModule { }
