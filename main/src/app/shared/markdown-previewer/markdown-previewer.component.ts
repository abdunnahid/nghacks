import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarkdownDialogPreviewComponent } from './components/markdown-dialog-preview/markdown-dialog-preview.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-markdown-previewer',
  templateUrl: './markdown-previewer.component.html',
  styleUrls: ['./markdown-previewer.component.scss']
})
export class MarkdownPreviewerComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any> = new Subject();
  @Input() fileName: string;

  constructor(
    private _dialog: MatDialog,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams
      .pipe(
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((params) => {
        if (params?.installationGuide && params?.installationGuide === 'show') {
          const dialogRef = this._dialog.open(MarkdownDialogPreviewComponent, {
            data: { name: this.fileName },
            panelClass: 'responsive-dialog'
          });

          dialogRef.afterClosed().subscribe(result => {
            this._router.navigate([], { queryParams: { installationGuide: null }, queryParamsHandling: 'merge' });
          });
        }
      });
  }

  public ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
