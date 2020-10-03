import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerComponent } from '../components/image-viewer/image-viewer.component';

@Directive({
  selector: '[imageViewer]'
})
export class ImageViewerDirective {

  @HostBinding('style.cursor') private _cursor;

  /**
   * @description Image source URL
   */
  @Input() src: string;

  /**
   * @description Alnernate text for image
   */
  @Input() alt: string;

  private _disabled: boolean;

  /**
   * @description Disables image viewer
   */
  @Input('disabled')
  public set disabled(v: boolean) {
    this._disabled = v;
    if (v) {
      this._cursor = 'initial';
    }
  }

  private _customSrc: string;

  @Input('imageViewer')
  public set customSrc(v: string) {
    if (!v) { return; }
    this._customSrc = v;
  }

  constructor(
    private _elRef: ElementRef,
    private _dialog: MatDialog
  ) {
    if (this._elRef.nativeElement.tagName === 'IMG') {
      this._cursor = 'zoom-in';
    }
  }


  @HostListener('click')
  public viewImage(): void {

    if (this._disabled) { return; }

    this._dialog.open(
      ImageViewerComponent,
      {
        autoFocus: false,
        data: {
          src: this._customSrc || this.src,
          alt: this.alt
        },
        panelClass: 'ng-hacks-image-viewer',
        backdropClass: 'ng-hacks-image-viewer-backdrop'
      }
    );
  }


}
