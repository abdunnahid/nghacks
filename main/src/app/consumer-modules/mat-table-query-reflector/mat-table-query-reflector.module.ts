import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableQueryReflectorRoutingModule } from './mat-table-query-reflector-routing.module';
import { MatTableQueryReflectorComponent } from './components/mat-table-query-reflector/mat-table-query-reflector.component';

import { ConsumerCommonModule } from '../consumer-common/consumer-common.module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgmatTableQueryReflectorModule } from 'ngmat-table-query-reflector';

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
    NgmatTableQueryReflectorModule,
    ConsumerCommonModule
  ]
})
export class MatTableQueryReflectorModule { }
