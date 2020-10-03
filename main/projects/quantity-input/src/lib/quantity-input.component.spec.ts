import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityInputComponent } from './quantity-input.component';

describe('QuantityInputComponent', () => {
  let component: QuantityInputComponent;
  let fixture: ComponentFixture<QuantityInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
