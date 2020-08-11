import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { MatTableQueryReflectorRoutingModule } from './mat-table-query-reflector-routing.module';
import { MatTableQueryReflectorComponent } from './components/mat-table-query-reflector/mat-table-query-reflector.component';
import { NgmatTableQueryReflectorModule } from 'ngmat-table-query-reflector';
import { MarkdownPreviewerModule } from '../../shared/markdown-previewer/markdown-previewer.module';

@NgModule({
  declarations: [
    MatTableQueryReflectorComponent
  ],
  imports: [
    CommonModule,
    MatTableQueryReflectorRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    NgmatTableQueryReflectorModule,
    MatIconModule,
    MatListModule,
    MarkdownPreviewerModule
  ]
})
export class MatTableQueryReflectorModule { }
