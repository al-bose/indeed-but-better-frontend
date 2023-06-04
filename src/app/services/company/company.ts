export class Company {
  id: number;
  name: string;
  size: string;
  industry: string;
  location: string;

  constructor(name: string, size: string, industry: string, location: string) {
    this.name = name;
    this.size = size;
    this.industry = industry;
    this.location = location;
  }
}
