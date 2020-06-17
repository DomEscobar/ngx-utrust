import { NgModule, ModuleWithProviders } from '@angular/core';
import { ApiConfig, API_CONFIG } from './api-config';
import { StoreService } from './services/store/store.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountService } from './services/merchant/account.service';
import { SessionService } from './services/merchant/session.service';


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
  static forRoot(apiconfig: ApiConfig): ModuleWithProviders
  {
    return {
      ngModule: NgxUtrustModule,
      providers: [
        StoreService,
        AccountService,
        SessionService,
        { provide: API_CONFIG, useValue: apiconfig }
      ]
    };
  }
}
