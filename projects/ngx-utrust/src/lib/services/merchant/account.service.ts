import { Injectable, Inject } from '@angular/core';
import { API_CONFIG, ApiConfig } from '../../api-config';
import { HttpClient } from '@angular/common/http';
import { PostModel, PostType } from '../../models/post.model';
import { AccountModel } from '../../models/account.model';
import { PasswordModel } from '../../models/password.model';
/**
 * https://docs.api.utrust.com/#tag/Account
 * @export
 * @class AccountService
 */
@Injectable()
export class AccountService
{
  protected API_URL: string;

  constructor(private http: HttpClient, @Inject(API_CONFIG) private config: ApiConfig)
  {
    this.API_URL = config.apiurl;
  }

  signUp(account: AccountModel)
  {
    return this.http.post(`${ this.API_URL }/stores/orders`, new PostModel(PostType.Account, account));
  }

  tfaActivation(codeData: string)
  {
    return this.http.post(`${ this.API_URL }/multi_factor_auth/tfa_activation`, new PostModel(PostType.TFA_ACTIVATION, { 'code': codeData }));
  }

  tfaDeactivation(userId: string, codeData: string)
  {
    return this.http.delete(`${ this.API_URL }/multi_factor_auth/tfa_activation/${ userId }`, {});
  }

  tfaConfirmation(codeData: string)
  {
    return this.http.post(`${ this.API_URL }/multi_factor_auth/tfa_confirmation`, new PostModel(PostType.TFA_CONFIRMATION, { 'code': codeData }));
  }

  requestSecret()
  {
    return this.http.post(`${ this.API_URL }/multi_factor_auth/tfa_secret`, new PostModel(PostType.TFA_SECRET));
  }

  tfaRegenerate(userId: string, id: string, recoveryCode: string)
  {
    const postModel = new PostModel(PostType.TFA_SECRET, { recovery_code: recoveryCode });
    postModel.data.id = id;

    return this.http.post(`${ this.API_URL }/multi_factor_auth/tfa_secret/${ userId }`, postModel);
  }

  updatePassword(id: string, password: PasswordModel)
  {
    const postModel = new PostModel(PostType.PASSWORD, new PostModel(PostType.PASSWORD, password));
    postModel.data.id = id;

    return this.http.patch(`${ this.API_URL }/settings/password`, postModel);
  }
}
