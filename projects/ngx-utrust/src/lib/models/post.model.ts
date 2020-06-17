import { StoreModel } from './store.model';
import { AccountModel } from './account.model';
export class PostModel
{
    public data: PostData;

    constructor(type: PostType, attributes: StoreModel | AccountModel)
    {
        this.data.type = type;
        this.data.attributes = attributes;
    }
}

export interface PostData
{
    type: PostType;
    attributes: StoreModel | AccountModel;
}

export enum PostType
{
    Orders = 'orders',
    Session = 'session'
}