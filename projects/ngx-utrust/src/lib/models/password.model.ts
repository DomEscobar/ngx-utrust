export class PasswordModel
{
    constructor(
        public password: string,
        public new_password: string,
        public tfa_token: string,
    )
    {
    }

}