import { Component, OnInit } from '@angular/core';
import { IBannerCarouselImage } from 'banner-carousel';

@Component({
  selector: 'app-banner-carousel-consumer',
  templateUrl: './banner-carousel-consumer.component.html',
  styleUrls: ['./banner-carousel-consumer.component.scss']
})
export class BannerCarouselConsumerComponent implements OnInit {

  data: IBannerCarouselImage[] = [];

  constructor() { }

  ngOnInit(): void {

    new Array(5).fill('s').forEach(_ => {
      this.data.push({
        src: `https://picsum.photos/1920/280?random=${Math.random()}`,
        id: 1232
      });
    });

  }

  onimageClick(e: IBannerCarouselImage): void {
    // console.log("BannerCarouselConsumerComponent -> onimageClick -> e", e)
  }

}
