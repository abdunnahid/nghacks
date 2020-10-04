import { TestBed } from '@angular/core/testing';

import { BannerCarouselService } from './banner-carousel.service';

describe('BannerCarouselService', () => {
  let service: BannerCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
