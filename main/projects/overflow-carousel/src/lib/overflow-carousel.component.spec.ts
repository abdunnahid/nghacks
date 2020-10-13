import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowCarouselComponent } from './overflow-carousel.component';

describe('OverflowCarouselComponent', () => {
  let component: OverflowCarouselComponent;
  let fixture: ComponentFixture<OverflowCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverflowCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverflowCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
