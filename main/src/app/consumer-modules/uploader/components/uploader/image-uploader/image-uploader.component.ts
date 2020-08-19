import { Component, OnInit } from '@angular/core';
import { FileInputChange } from 'uploader';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  imageUploaders = {
    upOne: {},
    upTwo: {},
    upThree: {},
  };

  constructor() { }

  ngOnInit(): void {
  }
  imageInputChange(ev: FileInputChange, key: string): void {
    this.imageUploaders[key] = ev;
    this.imageUploaders[key].base64Image = 'base64string';
  }
}
