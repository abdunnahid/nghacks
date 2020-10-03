import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityInputConsumerComponent } from './quantity-input-consumer.component';

describe('QuantityInputConsumerComponent', () => {
  let component: QuantityInputConsumerComponent;
  let fixture: ComponentFixture<QuantityInputConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityInputConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityInputConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
