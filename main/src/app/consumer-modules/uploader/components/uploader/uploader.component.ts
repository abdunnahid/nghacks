import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileInputChange } from 'uploader';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      img: [{ value: '', disabled: false }]
    });

    this.form.statusChanges.subscribe(_ => {
      console.log(this.form.get('img').value);
    });
  }

  fileInputChange(ev: FileInputChange): void {
    console.log("UploaderComponent -> fileInputChange -> ev", ev)
  }



}
