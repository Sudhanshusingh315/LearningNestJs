// Classes in Javascript it's just a sysntatical sugar of constructor

// Jese baar baar protoype mai dalna pardh rha hai function dalna pardh rha hai so esse nhi krna pardega
// classes mai, thati is why we call it sysntatical sugar

class CreatUser{
    // When we call this class ONLY contructor function will be called;
    constructor(firstName,lastName,age){
        console.log(firstName,lastName,age);
        this.firsName= firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // When we call this class only the constructor function will be called and this fucntion will go to the prototype;
    getBirthYear() {
        return new Date().getFullYear - this.age;
    }

    getFullName() {
        return this.firsName;
    }
}

const user1 = new CreatUser('Sudhanshu','Singh',23);
console.log(user1);

console.log(user1.getFullName());