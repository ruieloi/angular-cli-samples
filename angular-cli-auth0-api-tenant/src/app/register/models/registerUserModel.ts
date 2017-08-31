export class RegisterUserModel {

  public email: string;
  public firstName: string;
  public name: string;
  public lastName: string;

  constructor(
    email: string,
    name: string,
    firstName: string,
    lastName?: string
  ) {

      this.email = email;
      this.firstName = firstName;
      this.name = name;
      this.lastName = lastName;
   }

}

