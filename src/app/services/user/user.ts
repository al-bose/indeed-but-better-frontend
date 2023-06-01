export class User {
  userId: number;
  name: string;
  email: string;
  phoneNumber: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
