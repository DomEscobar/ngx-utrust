<h1> Utrust + Angular </h1>

<p> Create an easy and secure crypto payment (Buyer protected) </p>

Read more : <a href="www.utrust.com">Utrust.com</a>


<a href="https://github.com/DomEscobar/ngx-utrust/tree/master/projects/ngx-utrust"> > Source code of lib < </a>

##  Run the example
Clone the project (angular CLI is required) | After cloning change the API key to yours in the app.module.ts
<pre>
    git clone https://github.com/DomEscobar/ngx-utrust.git
    cd ngx-utrust
    npm install
    ng serve
</pre>

## Install

<pre>
    npm install ngx-utrust --save
</pre>


## Import

<pre>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxUtrustModule } from 'utrust';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxUtrustModule.forRoot({ apiKey: 'u_test_api_9fc4cc3a-a360-4d56-b308-9cd79f96ffdd', apiurl: https://merchants.api.sandbox-utrust.com/api' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
</pre>


##  Store API

### Create an order
You can look at the <a href="https://github.com/DomEscobar/ngx-utrust/blob/master/src/app/app.component.ts"> exmaple </a> source code also
<pre>
  customerModel: CustomerModel = new CustomerModel();
  order: OrderModel = new OrderModel();

  constructor(private storeService: StoreService)
  {
    this.order.reference = 'orderOne';
    this.order.amount = new AmountModel('10.00', 'EUR');
    this.order.return_urls = new ReturnUrlModel('http://localhost:4200');


    let item = new LineItemModel();
    item.sku = 'Item1';
    item.name = 'Item1';
    item.price = '10.00';
    item.currency = 'EUR';
    item.quantity = 1;
    this.order.line_items = [item];

    this.customerModel.country = 'germany';
    this.customerModel.email = 'neridonk@googlemail.com';
  }

  public async orderStore()
  {
    const store = new StoreModel()
    store.order = this.order;
    store.customer = this.customerModel;

    await this.storeService.createStoreOrder(store).toPromise();
  }</pre>


<pre>

</pre>

## TODO
Merchant API


## Licence 
MIT
