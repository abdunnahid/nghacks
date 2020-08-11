import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-markdown-dialog-preview',
  templateUrl: './markdown-dialog-preview.component.html',
  styleUrls: ['./markdown-dialog-preview.component.scss']
})
export class MarkdownDialogPreviewComponent {

  filePath: string;
  loaded: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.filePath = `assets/installation-guides/${data?.name}.md`;
  }

}
