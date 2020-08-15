import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { DynamicBrowserTitleService } from './dynamic-browser-title.service';
import { RouterModule } from '@angular/router';
import { DynamicBrowserTitleConfig } from './types/browser-title.config';

@NgModule({
  declarations: [],
  imports: [
    RouterModule
  ],
  exports: []
})
export class DynamicBrowserTitleModule {

  constructor(
    @Optional() @SkipSelf() parentModule: DynamicBrowserTitleModule,
    private _dynamicBrowserTitleService: DynamicBrowserTitleService
  ) {
    if (parentModule) {
      throw new Error('DynamicBrowserTitleModule is already loaded. Import it in the AppModule only');
    }
  }

  public static forRoot(dynamicBrowserTitleConfig: DynamicBrowserTitleConfig): ModuleWithProviders<DynamicBrowserTitleModule> {
    return {
      ngModule: DynamicBrowserTitleModule,
      providers: [
        {
          provide: DynamicBrowserTitleConfig,
          useValue: dynamicBrowserTitleConfig
        },
      ]
    };
  }
}
