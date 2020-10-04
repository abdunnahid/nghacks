import { Component, Input, OnInit } from '@angular/core';
import { BannerCarouselService } from '../banner-carousel.service';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  src: string;
  @Input('src')
  private set _src(v: string) {
    if (!v) { return; }
    this.src = v;
    this._loadImage(v);
  }

  @Input() alt: string;

  hasImageLoaded: boolean;

  constructor(
    private _bannerCarouselService: BannerCarouselService
  ) { }

  ngOnInit(): void {
  }

  private async _loadImage(v: string): Promise<void> {
    this.hasImageLoaded = await this._bannerCarouselService.hasImageLoaded(this.src);
  }

}
