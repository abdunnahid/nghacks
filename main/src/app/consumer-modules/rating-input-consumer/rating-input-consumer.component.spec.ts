import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingInputConsumerComponent } from './rating-input-consumer.component';

describe('RatingInputConsumerComponent', () => {
  let component: RatingInputConsumerComponent;
  let fixture: ComponentFixture<RatingInputConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingInputConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingInputConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
