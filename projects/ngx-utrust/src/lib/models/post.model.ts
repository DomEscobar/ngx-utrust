import { StoreModel } from './store.model';
import { AccountModel } from './account.model';
export class PostModel
{
    public data: HttpModel;

    constructor(type: PostType, attributes?: any)
    {
        this.data.type = type;
        this.data.attributes = attributes;
    }
}

export interface HttpModel
{
    type: PostType;
    id?: string;
    attributes: any;
}

export enum PostType
{
    Orders = 'orders',
    Session = 'session',
    Account = 'account',
    TFA_ACTIVATION = 'tfa_activation',
    TFA_CONFIRMATION = 'tfa_confirmation',
    TFA_SECRET = 'tfa_secret',
    PASSWORD = 'tfa_password'
}