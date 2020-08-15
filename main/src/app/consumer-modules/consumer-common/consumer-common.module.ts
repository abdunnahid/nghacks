import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  exports: [
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ]
})
export class ConsumerCommonModule { }
