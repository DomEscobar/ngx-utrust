export class OrderModel
{
    reference: string;
    amount: AmountModel;
    return_urls: ReturnUrlModel;
    line_items: Array<LineItemModel>
}

export class LineItemModel
{
    sku: string;
    name: string;
    price: string;
    currency: string;
    quantity: number;
}

export class AmountModel
{
    constructor(
        public total: string,
        public currency: string
    ) { }
}

export class ReturnUrlModel
{
    constructor(public return_url: string)
    { }
}