import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDialogConsumerComponent } from './info-dialog-consumer.component';

describe('InfoDialogConsumerComponent', () => {
  let component: InfoDialogConsumerComponent;
  let fixture: ComponentFixture<InfoDialogConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDialogConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDialogConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
