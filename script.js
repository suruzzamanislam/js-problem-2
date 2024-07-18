// problem-1
const person = {
  name: 'Suruzzaman',
  age: 19,
};
const { name, age } = person;
console.log(name, age);

// // problem-2
// import { calculateArea } from './circle';
// const area = calculateArea(5);
// console.log(area);

// problem -3
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateRectangle() {
    return this.width * this.height;
  }
}
const myRectangle = new Rectangle(5, 2);
console.log(myRectangle.calculateRectangle());

// problem-4
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const man = new Person('Suruzzaman', 'Saju');
man.fullName = 'raju islam';
console.log(man.firstName, man.lastName);

// problem-5
const Circle = class {
  constructor(radius) {
    this.radius = radius;
  }
  calculateCircumference() {
    const pi = Math.PI;
    return 2 * pi * this.radius;
  }
};
const myCircle = new Circle(5);
console.log(myCircle.calculateCircumference());

// problem-6
let propName1 = 'name';
let propName2 = 'age';
let person2 = {
  [propName1]: 'John Doe',
  [propName2]: 30,
};
console.log(person2);

// problem-7
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} makes a sound: ${this.sound}`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'bark');
    this.breed = breed;
  }

  displayBreed() {
    console.log(`${this.name} is a ${this.breed}`);
  }
}
const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.makeSound();
myDog.displayBreed();

// problem-8
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('Cannot instantiate an abstract class directly.');
    }
  }

  // Abstract method
  getArea() {
    throw new Error('Abstract method must be implemented by subclass.');
  }
}

// problem-9
class MathUtil {
  static square(number) {
    return number * number;
  }
}

console.log(MathUtil.square(5));
console.log(MathUtil.square(10));

// problem-10
const mySymbol = Symbol('mySymbolKey');
const myObject = {
  [mySymbol]: 'This is a value associated with the symbol key',
};
console.log(myObject[mySymbol]);
