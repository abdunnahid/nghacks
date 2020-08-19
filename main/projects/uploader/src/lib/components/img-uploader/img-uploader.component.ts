import { Component, Input } from '@angular/core';
import { BaseUploaderComponent } from '../base/uploader.base';

@Component({
  selector: 'img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent extends BaseUploaderComponent {

  /**
   * @default 'Drag image, or Choose'
   */
  @Input() pickerLabel = 'Drag image, or Choose';

  /**
   * @default ['.jpg', '.png', '.jpeg']
   */
  @Input() accept: string[] = ['.jpg', '.png', '.jpeg'];

  /**
   * @description max-height of the image previewer
   * @memberof ImgUploaderComponent
   */
  @Input() maxHeight = 250;


}
