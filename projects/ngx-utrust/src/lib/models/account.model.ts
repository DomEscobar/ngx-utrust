export class AccountModel
{
    constructor(
        public email: string,
        public password: string,
        public organization_name?: string,
        public first_name?: string,
        public last_name?: string
    )
    {
    }

}