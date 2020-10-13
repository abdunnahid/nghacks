import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overflow-carousel-consumer',
  templateUrl: './overflow-carousel-consumer.component.html',
  styleUrls: ['./overflow-carousel-consumer.component.scss']
})
export class OverflowCarouselConsumerComponent implements OnInit {


  images = [];
  products = [];
  dynamicItems = [];
  filters = [];

  constructor() { }

  ngOnInit(): void {
    new Array(20).fill('.').forEach((element, index) => {
      this.images.push(`https://picsum.photos/300/300?random=${Math.random()}`);
    });
    new Array(20).fill('.').forEach((element, index) => {
      this.products.push(index);
    });
    new Array(3).fill('.').forEach((element, index) => {
      this.dynamicItems.push(index);
    });
    new Array(7).fill('.').forEach((element, index) => {
      this.filters.push(index + 1);
    });
  }

}
