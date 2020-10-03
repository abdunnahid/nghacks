import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

export class ImageDimension {
  public width: number;
  public height: number;

  constructor(width = 0, height = 0) {
    this.height = height;
    this.width = width;
  }
}

export interface ImageViewerDialogData { src: string; alt: string; }

@Component({
  selector: 'lib-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit, OnDestroy {

  src: string;
  alt: string;

  calculatedImageDimension: ImageDimension;
  imageLoaded: boolean;
  hideCloseBtn: boolean;

  private _originalImageDimension: ImageDimension;
  private _unsubscribeAll: Subject<any> = new Subject();
  private _document: Document;

  constructor(
    @Inject(DOCUMENT) private _nativeDocument: any,
    @Inject(MAT_DIALOG_DATA) private _data: ImageViewerDialogData,
    @Inject(PLATFORM_ID) private _platformId: any,
    private _dialogRef: MatDialogRef<ImageViewerComponent>,
  ) {
    this._document = this._nativeDocument as Document;
  }

  async ngOnInit(): Promise<void> {
    this._originalImageDimension = await this.getOriginalImageDimension(this._data.src);
    this.setImageDimension();
    this.src = this._data.src;
    this.alt = this._data.alt;
    this.imageLoaded = true;

    // hide the close button before dialog close
    // Otherwise it apears inside image
    this._dialogRef.beforeClosed()
      .pipe(
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(res => {
        this.hideCloseBtn = true;
      });
  }

  @HostListener('window:resize', ['$event'])
  private setImageDimension(): void {

    if (!isPlatformBrowser(this._platformId)) { return; }

    const windowDimension = new ImageDimension(
      this.percentage(this._document.body.clientWidth, 90),
      this.percentage(this._document.body.clientHeight, 90)
    );
    this.calculatedImageDimension = this.calculateAspectRatioFit(this._originalImageDimension, windowDimension);
  }

  private calculateAspectRatioFit(srcDimension: ImageDimension, maxDimension: ImageDimension): ImageDimension {
    if (srcDimension.height <= maxDimension.height && srcDimension.width <= maxDimension.width) {
      return srcDimension;
    }
    const ratio = Math.min(maxDimension.width / srcDimension.width, maxDimension.height / srcDimension.height);
    return new ImageDimension(srcDimension.width * ratio, srcDimension.height * ratio);
  }

  private getOriginalImageDimension(imageUrl: string): Promise<ImageDimension> {

    if (!imageUrl) { return; }

    return new Promise(res => {
      const img = new Image();
      img.onload = (event) => {
        const loadedImage: any = event.currentTarget;
        const dimension = new ImageDimension(loadedImage.width, loadedImage.height);
        return res(dimension);
      };
      img.src = imageUrl;

    });
  }

  private percentage(total: number, percent: number): number {
    return ((percent / 100) * total);
  }

  public ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


}
