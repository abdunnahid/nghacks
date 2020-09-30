import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'info-dialog',
    templateUrl: './info-dialog.component.html',
    styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent {

    @ViewChild('infoTemplateRef') private infoTemplateRef: TemplateRef<any>;

    constructor(private _dialog: MatDialog) { }

    openDialog(): void {
        this._dialog.open(
            this.infoTemplateRef,
            {
                minWidth: '400px',
                width: '90%',
                maxWidth: '720px',
                autoFocus: false,
            }
        );
    }

}
