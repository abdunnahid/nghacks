import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { BannerCarouselService } from './banner-carousel.service';
import { IBannerCarouselImage } from './types/banner-carousel-image.model';


@Component({
  selector: 'banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnDestroy {

  /**
   * @description Emits when carousel image is changed
   * @returns {IBannerCarouselImage}
   */
  @Output() imageChange = new EventEmitter<IBannerCarouselImage>();

  /**
   * @description Emits when carousel image is clicked
   * @returns {IBannerCarouselImage}
   */
  @Output() imageClick = new EventEmitter<IBannerCarouselImage>();

  /**
   * @description Data Source for the carousel
   * @field Required
   */
  data: IBannerCarouselImage[];
  @Input('data')
  private set _data(v: IBannerCarouselImage[]) {
    if (!v) { return; }
    this.data = v;
    this._init(v);
  }

  /**
   * @description Height of the carousel
   * @type number that represents pixel
   * @default 280 in pixel
   */
  @Input() height = 280;

  /**
   * @description Enable/Disable auto change behavior of the carousel
   * @default true
   */
  @Input() autoChange = true;

  /**
   * @description Auto change interval of carousel
   * @type number that represents in ms(milisecond)
   * @default 5000 in ms
   */
  @Input() autoChangeInterval = 5000;

  activeBanner = 1;

  private _timer$: Subscription;

  constructor(
    private _bannerCarouselService: BannerCarouselService
  ) { }

  private async _init(v: IBannerCarouselImage[]): Promise<void> {
    await this._bannerCarouselService.hasImageLoaded(v[0].src);
    if (!this.autoChange) { return; }
    this._initAutoChange();
  }

  private _initAutoChange(): void {
    this._timer$ = interval(this.autoChangeInterval)
      .subscribe(val => {
        if (this.autoChange) {
          this.next();
        }
      });
  }

  public next(): void {
    if (this.activeBanner === this.data.length) {
      this.activeBanner = 1;
    }
    else {
      this.activeBanner++;
    }
    this.imageChange.emit(this.data[this.activeBanner - 1]);
  }

  public previous(): void {
    if (this.activeBanner === 1) {
      this.activeBanner = this.data.length;
    }
    else {
      this.activeBanner--;
    }
    this.imageChange.emit(this.data[this.activeBanner - 1]);
  }

  public resetTimer(): void {
    if (!this._timer$) { return; }
    this._timer$.unsubscribe();
    this._timer$ = null;
    this._initAutoChange();
  }

  public ngOnDestroy(): void {
    if (!this._timer$) { return; }
    this._timer$.unsubscribe();
  }

}
