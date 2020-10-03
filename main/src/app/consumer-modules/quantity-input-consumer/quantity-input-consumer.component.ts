import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quantity-input-consumer',
  templateUrl: './quantity-input-consumer.component.html',
  styleUrls: ['./quantity-input-consumer.component.scss']
})
export class QuantityInputConsumerComponent implements OnInit {

  quantityInputsForm: FormGroup;
  x = 10;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.quantityInputsForm = this._formBuilder.group({
      inputOne: [5]
    });
  }

  ngOnInit(): void {
  }

}
