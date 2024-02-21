
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}


const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);


person1.sayInfo();
person2.sayInfo();
console.info(person1.sayInfo);

