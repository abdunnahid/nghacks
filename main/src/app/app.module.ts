import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

import { DynamicBrowserTitleModule } from 'dynamic-browser-title';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    DynamicBrowserTitleModule.forRoot({
      selector: '.page header h1'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
