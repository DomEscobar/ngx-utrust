import { Injectable, Inject } from '@angular/core';
import { API_CONFIG, ApiConfig } from '../../api-config';
import { HttpClient } from '@angular/common/http';
import { PostModel, PostType } from '../../models/post.model';
import { AccountModel } from '../../models/account.model';

@Injectable()
export class SessionService
{
  protected API_URL: string;

  constructor(private http: HttpClient, @Inject(API_CONFIG) private config: ApiConfig)
  {
    this.API_URL = config.apiurl;
  }

  generateSessionToken(account: AccountModel)
  {
    return this.http.post(`${ this.API_URL }/stores/orders`, new PostModel(PostType.Session, account));
  }
}
