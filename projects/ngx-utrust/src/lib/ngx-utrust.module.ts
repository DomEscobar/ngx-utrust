import { NgModule, ModuleWithProviders } from '@angular/core';
import { ApiConfig, API_CONFIG } from './api-config';
import { StoreService } from './services/store.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header-interceptor';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: []
})
export class NgxUtrustModule
{
  /**
  * Please use this method when you register the module at the root level.
  */
  static forRoot(apiconfig?: ApiConfig): ModuleWithProviders
  {
    return {
      ngModule: NgxUtrustModule,
      providers: [
        StoreService,
        { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
        { provide: API_CONFIG, useValue: apiconfig },
      ]
    };
  }
}
