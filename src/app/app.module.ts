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
    NgxUtrustModule.forRoot({ apiKey: 'u_test_api_9fc4cc3a-a360-4d56-b308-9cd79f96ffdd', apiurl: 'https://cors-anywhere.herokuapp.com/https://merchants.api.sandbox-utrust.com/api' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
