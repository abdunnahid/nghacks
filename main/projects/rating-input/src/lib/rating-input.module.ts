import { NgModule } from '@angular/core';
import { RatingInputComponent } from './rating-input.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RatingInputComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    RatingInputComponent
  ]
})
export class RatingInputModule { }
