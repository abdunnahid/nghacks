import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowCarouselConsumerComponent } from './overflow-carousel-consumer.component';

describe('OverflowCarouselConsumerComponent', () => {
  let component: OverflowCarouselConsumerComponent;
  let fixture: ComponentFixture<OverflowCarouselConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverflowCarouselConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverflowCarouselConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
