import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicBrowserTitleComponent } from './components/dynamic-browser-title/dynamic-browser-title.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicBrowserTitleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicBrowserTitleRoutingModule { }
