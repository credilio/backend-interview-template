export default class Person {
  public name;
  public gender;

  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  introduce() {
    return `Hi, I am ${this.name}. I am ${this.gender}.`;
  }
}
