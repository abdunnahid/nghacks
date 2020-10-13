import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ResizedDirective, ResizedEvent } from 'angular-resize-event';
import { merge, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { SliderButtonVisibilty } from './helpers/slider-button-visibilty';

@Component({
  selector: 'overflow-carousel',
  templateUrl: './overflow-carousel.component.html',
  styleUrls: ['./overflow-carousel.component.scss'],
  exportAs: 'overflowCarousel'
})
export class OverflowCarouselComponent implements AfterViewInit, OnDestroy {

  /**
   * Sliding animation time
   * @type number
   * @default .4
   */
  @Input() transitionDuration = .4;


  /**
   * Percentage of the content to move on each slide
   * @type number
   * @field value between 0.1 - 1 with the aspect of container width
   */
  private _slidePercentage = .8;
  @Input('slidePercentage')
  private set slidePercentage(v: number) {
    if (v && (v < .1 || v > 1)) {
      throw new Error('Input slidePercentage must be in between .1 and 1');
    }
    this._slidePercentage = v || .8;
  }

  public sliderButtonsVisibility: SliderButtonVisibilty = new SliderButtonVisibilty();

  @ViewChild('carouselContainer', { static: true }) private _carouselContainerElementRef: ElementRef;
  @ViewChild('carousel', { static: true }) private _carouselElementRef: ElementRef;
  @ViewChildren(ResizedDirective) private _resizedDirectives: QueryList<ResizedDirective>;

  private _containerWidth: number;
  private _contentWidth: number;
  private _carouselPosition = 0;

  private _unsubscribeAll: Subject<any> = new Subject();

  constructor() { }

  public ngAfterViewInit(): void {

    const resizedEvents: EventEmitter<ResizedEvent>[] = this._resizedDirectives.map(directive => directive.resized);

    merge(...resizedEvents)
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(100)
      )
      .subscribe((ev: ResizedEvent) => {
        this._containerWidth = this._carouselContainerElementRef.nativeElement.clientWidth;
        this._contentWidth = this._carouselElementRef.nativeElement.clientWidth;
        this.carouselPosition = this._carouselPosition;
      });
  }

  public get carouselPosition(): number {
    return this._carouselPosition;
  }

  public set carouselPosition(v: number) {

    let tranlate = v;

    if (this._contentWidth < this._containerWidth || tranlate >= 0) {
      tranlate = 0;
    }
    else if (Math.abs(tranlate) >= this._contentWidth - this._containerWidth) {
      tranlate = this._containerWidth - this._contentWidth;
    }
    this._carouselPosition = tranlate;

    this.sliderButtonsVisibility.updateSliderButtonVisibilty(
      this._containerWidth,
      this._contentWidth,
      this._carouselPosition
    );
  }

  /**
   * Slide the carousel to next sliding position
   */
  public next(): void {
    this.carouselPosition = this._carouselPosition - (this._slidePercentage * this._containerWidth);
  }

  /**
   * Slide the carousel to previous sliding position
   */
  public previous(): void {
    this.carouselPosition = this._carouselPosition + (this._slidePercentage * this._containerWidth);
  }

  public ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
