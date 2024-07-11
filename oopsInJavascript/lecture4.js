class CreatUser {
  #age;
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.#age = age);
  }

  getBirthAge() {
    return new Date().getFullYear() - this.age;
  }
}

const user1 = new CreatUser("Sudhanshu", "Singh", 23);
