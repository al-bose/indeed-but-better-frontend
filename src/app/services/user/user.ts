export class User {
  userId: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  userPicture: string;
  phoneNumber: string;
  userType: string;
  company: string;

  constructor(email: string, name: string, firstName: string, lastName: string, userType: string) {
    this.email = email;
    this.name = name;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userType = userType;
  }

}
