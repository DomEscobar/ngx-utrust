import { Injectable, Inject } from '@angular/core';
import { API_CONFIG, ApiConfig } from '../../api-config';
import { HttpClient } from '@angular/common/http';
import { StoreModel } from '../../models/store.model';
import { PostModel, PostType } from '../../models/post.model';

@Injectable()
export class StoreService
{
  protected API_URL: string;

  constructor(private http: HttpClient, @Inject(API_CONFIG) private config: ApiConfig)
  {
    this.API_URL = config.apiurl;
  }

  createStoreOrder(store: StoreModel)
  {
    return this.http.post(`${ this.API_URL }/stores/orders`, new PostModel(PostType.Orders, store),
      {
        headers: {
          'Authorization': 'Bearer ' + this.config.apiKey,
          'content-type': 'application/json'
        }
      }
    );
  }
}
