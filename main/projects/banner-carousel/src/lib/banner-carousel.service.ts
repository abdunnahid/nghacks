import { Injectable } from '@angular/core';

@Injectable()
export class BannerCarouselService {

  constructor() { }

  public hasImageLoaded(imageUrl: string): Promise<boolean> {

    if (!imageUrl) { return; }

    return new Promise(res => {
      const img = new Image();
      img.onload = (event) => {
        // const loadedImage: any = event.currentTarget;
        return res(true);
      };
      img.src = imageUrl;
    });
  }
}
