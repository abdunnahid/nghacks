import { Component, OnInit } from '@angular/core';
import { FileInputChange } from 'uploader';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  fileUploaders = {
    upOne: {},
    upTwo: {},
    upThree: {},
  };

  constructor() { }

  ngOnInit(): void {
  }
  imageInputChange(ev: FileInputChange, key: string): void {
    this.fileUploaders[key] = ev;
    this.fileUploaders[key].base64Image = 'base64string';
  }

}
