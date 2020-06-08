export class User {
  birthdate: Date;
  email: string;
  firstname: string;
  lastname: string;

  constructor(firstname: string, lastname: string, birthdate: Date, email: string) {
    this.firstname = firstname;
    this.email = email;
    this.lastname = lastname;
    this.birthdate = birthdate;
  }
}
