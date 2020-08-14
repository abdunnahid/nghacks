import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatTableQueryReflectorComponent } from './components/mat-table-query-reflector/mat-table-query-reflector.component';

const routes: Routes = [
  {
    path: '',
    component: MatTableQueryReflectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatTableQueryReflectorRoutingModule { }
