import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgMatTableStateManagerDirective } from './directives/ngmat-table-state-manager.directive';

@NgModule({
  declarations: [
    NgMatTableStateManagerDirective
  ],
  exports: [
    NgMatTableStateManagerDirective
  ]
})
export class NgmatTableStateManagerModule {
  public static forRoot(windowObject: Window): ModuleWithProviders<NgmatTableStateManagerModule> {
    windowObject = windowObject || window;
    return {
      ngModule: NgmatTableStateManagerModule,
      providers: [{
        provide: 'window',
        useValue: windowObject
      }]
    };
  }
}
