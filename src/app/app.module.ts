import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgmatTableStateManagerModule } from 'ngmat-table-state-manager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgmatTableStateManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
