import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgmatTableStateManagerConsumerModule } from './consumers/ngmat-table-state-manager/ngmat-table-state-manager.consumer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgmatTableStateManagerConsumerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
