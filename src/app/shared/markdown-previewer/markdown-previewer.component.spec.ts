import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownPreviewerComponent } from './markdown-previewer.component';

describe('MarkdownPreviewerComponent', () => {
  let component: MarkdownPreviewerComponent;
  let fixture: ComponentFixture<MarkdownPreviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownPreviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
