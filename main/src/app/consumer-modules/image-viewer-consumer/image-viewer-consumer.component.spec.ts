import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerConsumerComponent } from './image-viewer-consumer.component';

describe('ImageViewerConsumerComponent', () => {
  let component: ImageViewerConsumerComponent;
  let fixture: ComponentFixture<ImageViewerConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageViewerConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewerConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
