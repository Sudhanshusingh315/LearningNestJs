// Constructor funtion 
function createUser(firstName, lastName, age) {
  (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
}

createUser.prototype.getBirthYear = function (){
    return new Date().getFullYear() - this.age;
}
createUser.prototype.getFullName = function(){
    return this.firstName
}
createUser.prototype.HelloMessage = function(){
    return `Super excited to see you ${this.firstName}`
}

const user1 = new createUser("Sudhanshu","singh",23);
const user2 = new createUser("Krishan","Gopal",22);


console.log(user1.getBirthYear());
console.log(user1.getFullName());
console.log(user1.HelloMessage());