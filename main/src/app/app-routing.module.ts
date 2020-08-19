import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(module => module.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'mat-table-query-reflector',
    loadChildren: () => import('./consumer-modules/mat-table-query-reflector/mat-table-query-reflector.module')
      .then(module => module.MatTableQueryReflectorModule)
  },
  {
    path: 'dynamic-browser-title',
    loadChildren: () => import('./consumer-modules/dynamic-browser-title/dynamic-browser-title.module')
      .then(module => module.DynamicBrowserTitleModule)
  },
  {
    path: 'uploader',
    loadChildren: () => import('./consumer-modules/uploader/uploader.module')
      .then(module => module.UploaderConsumerModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
