import {Address} from "./address";

export class Company {
  id: number;
  name: string;
  size: string;
  industry: string;
  address: Address;

  constructor(name: string, size: string, industry: string, address : Address) {
    this.name = name;
    this.size = size;
    this.industry = industry;
    this.address = address;
  }
}
