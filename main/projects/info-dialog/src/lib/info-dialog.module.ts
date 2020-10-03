import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoDialogComponent } from './info-dialog.component';
import { InfoTitleComponent } from './components/info-title/info-title.component';
import { InfoSectionTitleComponent } from './components/info-section-title/info-section-title.component';
import { InfoLabelComponent } from './components/info-label/info-label.component';
import { InfoContentComponent } from './components/info-content/info-content.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InfoItemComponent } from './components/info-item/info-item.component';

@NgModule({
    declarations: [
        InfoDialogComponent,
        InfoTitleComponent,
        InfoSectionTitleComponent,
        InfoLabelComponent,
        InfoContentComponent,
        InfoSectionComponent,
        InfoItemComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        InfoDialogComponent,
        InfoTitleComponent,
        InfoSectionTitleComponent,
        InfoLabelComponent,
        InfoContentComponent,
        InfoSectionComponent,
        InfoItemComponent
    ]
})
export class InfoDialogModule { }
