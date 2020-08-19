import { Input, Output, EventEmitter, Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UploaderService } from '../../services/uploader.service';
import { FileInputChange, UploaderError } from '../types/file-change.interface';



@Component({ template: '' })
export class BaseUploaderComponent {

  fileInputChangeStore: FileInputChange;
  @Output() fileInputChange = new EventEmitter<FileInputChange>();

  formCtrl: FormControl = new FormControl();

  /**
   * @description Picker label
   * @default 'Drag image, or Choose' for image uploader
   * @default 'Drag file, or Choose' for file uploader
   * @example 'Drag your funny video, or Choose'
   */
  @Input() pickerLabel: string;

  /**
   * @description Hint is used to guide user
   * @example 'Max file size: 5mb'
   */
  @Input() hint: string;

  /**
   * @description acceptable file types
   * @default ['.jpg', '.png', '.jpeg'] for image uploader
   * @default ['.pdf', '.csv', '.doc', '.docx','.docx', '.xlsx', '.cer'] for file uploader
   * @example ['.gif'] for only gif files
   */
  @Input() accept: string[];

  /**
   * @description maximum file size in kb (kilobyte)
   * @default 5000 (5mb)
   */
  @Input() maxSize = 5000;

  /**
   * @description disables the picker
   */
  @Input() disabled: boolean;

  /**
   * @description min-height of the picker
   * @default 48 (in pixel)
   */
  @Input() minHeight = 48;

  dragover: boolean;

  constructor(
    private _uploaderService: UploaderService
  ) { }

  // Dragover listener
  @HostListener('dragover', ['$event'])
  private onDragOver(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.dragover = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  private onDragLeave(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.dragover = false;
  }

  // Drop listener
  @HostListener('drop', ['$event'])
  private ondrop(evt): void {
    evt.preventDefault();
    evt.stopPropagation();

    if (evt.dataTransfer.files && evt.dataTransfer.files[0]) {
      this.addFile(evt.dataTransfer.files[0]);
    }
    this.dragover = false;
  }

  // Choose listener
  public async inputChange(event): Promise<void> {
    if (event.target.files && event.target.files[0]) {
      this.addFile(event.target.files[0]);
    }
  }

  private async addFile(file: any): Promise<void> {

    if (!file) { return; }
    if (this.formCtrl.disabled) { return; }

    const errors = this.validate(file);

    const fileName = file.name as string;
    const base64Image = await this._uploaderService.getBase64(file);

    this.fileInputChangeStore = {
      hasFile: true,
      fileName,
      errors,
      base64Image
    };

    this.fileInputChange.emit(this.fileInputChangeStore);
    this.formCtrl.setValue(base64Image);

  }

  private validate(file: any): UploaderError {

    let isSizeValid = true;
    if ((file.size / 1000) > this.maxSize) {
      isSizeValid = false;
    }

    let isTypeValid = false;

    for (const type of this.accept) {
      if (type.split('.')[1] === file.type.split('/')[1]) {
        isTypeValid = true;
      }
    }

    return this.getError(isSizeValid, isTypeValid);
  }

  private getError(size: boolean, type: boolean): UploaderError {

    let errors: UploaderError;

    if (size && type) {
      errors = {
        maxSizeExceeded: null,
        wrongFileType: null
      };
    }
    else if (!size && type) {
      errors = {
        maxSizeExceeded: true,
        wrongFileType: null
      };
    }
    else if (size && !type) {
      errors = {
        maxSizeExceeded: null,
        wrongFileType: true
      };
    }
    else {
      errors = {
        wrongFileType: true,
        maxSizeExceeded: true
      };
    }

    return errors;
  }

  private getImageHeightWidth(base64Image: any): Promise<{ height: number, width: number }> {
    return new Promise(async resolve => {
      const image = new Image();
      image.src = base64Image;
      image.onload = () => {
        return resolve({
          height: image.height,
          width: image.width
        });
      };
    });
  }

  public removeFile(): void {
    this.fileInputChangeStore = {
      hasFile: false,
      fileName: null,
      errors: null,
      base64Image: null
    };
    this.fileInputChange.emit(this.fileInputChangeStore);
    this.formCtrl.setValue('');
  }

}
