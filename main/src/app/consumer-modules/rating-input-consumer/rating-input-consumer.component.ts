import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rating-input-consumer',
  templateUrl: './rating-input-consumer.component.html',
  styleUrls: ['./rating-input-consumer.component.scss']
})
export class RatingInputConsumerComponent implements OnInit {

  ratingInputsForm: FormGroup;
  x = 2;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.ratingInputsForm = this._formBuilder.group({
      inputOne: [2]
    });
  }

  ngOnInit(): void { }

}
