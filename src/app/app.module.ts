import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxUtrustModule } from 'utrust';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxUtrustModule.forRoot({ apiKey: 'u_test_api_1fd88918-a5cf-436d-bda4-eaad94dd7225', apiurl: 'https://cors-anywhere.herokuapp.com/https://merchants.api.sandbox-utrust.com/api' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
