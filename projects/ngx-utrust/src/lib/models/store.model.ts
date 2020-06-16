import { OrderModel } from './order.model';
export class StoreModel
{
    order: OrderModel;
    customer: CustomerModel;
}

export class CustomerModel
{
    email: string;
    country: string;
}