import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownDialogPreviewComponent } from './markdown-dialog-preview.component';

describe('MarkdownDialogPreviewComponent', () => {
  let component: MarkdownDialogPreviewComponent;
  let fixture: ComponentFixture<MarkdownDialogPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownDialogPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownDialogPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
