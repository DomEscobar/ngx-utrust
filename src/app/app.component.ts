import { Component } from '@angular/core';
import { StoreModel, CustomerModel, OrderModel, AmountModel, LineItemModel, ReturnUrlModel, StoreService } from 'utrust';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
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
  }
}
