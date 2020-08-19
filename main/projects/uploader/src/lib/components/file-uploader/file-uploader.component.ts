import { Component, OnInit, Input } from '@angular/core';
import { BaseUploaderComponent } from '../base/uploader.base';

@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent extends BaseUploaderComponent {

  /**
   * @default 'Drag file, or Choose''
   */
  @Input() pickerLabel = 'Drag file, or Choose';

  /**
   * @default ['.pdf', '.csv', '.doc', '.docx','.docx', '.xlsx', '.cer']
   */
  @Input() accept: string[] = ['.pdf', '.csv', '.doc', '.docx','.docx', '.xlsx', '.cer'];

}
