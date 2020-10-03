import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityInputComponent } from './quantity-input.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuantityInputComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [QuantityInputComponent]
})
export class QuantityInputModule { }
