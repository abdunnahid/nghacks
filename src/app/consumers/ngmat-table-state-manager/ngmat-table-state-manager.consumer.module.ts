import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmatTableStateManagerComponent } from './components/ngmat-table-state-manager/ngmat-table-state-manager.component';
import { NgmatTableStateManagerModule } from 'ngmat-table-state-manager';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    NgmatTableStateManagerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgmatTableStateManagerModule
  ],
  exports: [
    NgmatTableStateManagerComponent
  ]
})
export class NgmatTableStateManagerConsumerModule { }
