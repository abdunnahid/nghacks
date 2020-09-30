import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoDialogConsumerComponent } from './component/info-dialog-consumer/info-dialog-consumer.component';

const routes: Routes = [
  {
    path: '',
    component: InfoDialogConsumerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoDialogRoutingModule { }
