import { Injectable, Inject } from '@angular/core';
import { API_CONFIG, ApiConfig } from '../api-config';
import { HttpClient } from '@angular/common/http';
import { StoreModel } from '../models/store.model';

@Injectable()
export class StoreService
{
  protected API_URL: string;

  constructor(private http: HttpClient, @Inject(API_CONFIG) config: ApiConfig)
  {
    this.API_URL = config.apiurl;
  }

  createStoreOrder(store: StoreModel)
  {
    return this.http.post(`${ this.API_URL }/stores/orders`, this.wrapStoreOrder(store));
  }

  private wrapStoreOrder(store: StoreModel)
  {
    let item = {
      data: {
        type: "orders",
        attributes: store
      }
    }

    return item;
  }
}
