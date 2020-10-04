import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCarouselConsumerComponent } from './banner-carousel-consumer.component';

describe('BannerCarouselConsumerComponent', () => {
  let component: BannerCarouselConsumerComponent;
  let fixture: ComponentFixture<BannerCarouselConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCarouselConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCarouselConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
