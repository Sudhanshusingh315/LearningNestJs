// Encapulation
const user1 = {
  firstName: "Sudhanshu",
  lastName: "Singh",
  age: 25,
};

// creating factory function
function createUser(firstName, lastName, age) {
  if (firstName && lastName && age) {
    const user = {
      firstName,
      lastName,
      age,
      getAgeYear: function () {
        new Date().getFullYear() - user1.age;
      },
    };
    return user;
  }
}

console.log(createUser("sudhanshu", "singh", 23));
console.log(createUser("Garima", "Kushal", 31));
console.log(createUser("Krishan", "gopal", 22));
console.log(createUser("Balram", "Agnihotri", 20));

// now to getAgeYear() function is being created agina and again, to fix this