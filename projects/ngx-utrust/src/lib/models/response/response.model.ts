export class ResponseCreateOrder
{
    public data: ResponseCreateOrderData;
}

interface ResponseCreateOrderData
{
    type: "orders_redirect";
    id?: string;
    attributes: ResponseCreateOrdeAttributes;
}

interface ResponseCreateOrdeAttributes
{
    redirect_url: string;
}