export class RegisterUserModel {

  public email: string;
  public name: string;
  public tenant: string;
  public tenantDomain: string;

  constructor(
    email: string,
    name: string
  ) {

      this.email = email;
      this.name = name;
      this.tenant = '';
      this.tenantDomain = '';
   }

}

