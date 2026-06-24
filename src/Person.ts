export default class Person {
  public name: string;
  public gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }

  introduce(): string {
    return `Hi, I am ${this.name}. I am ${this.gender}.`;
  }
}
