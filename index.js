// Import stylesheets
import './style.css';

//parent class
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  // static method
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNum = Math.floor(Math.random() * 5);
    return names[randomNum];
  }
}

//call the static method
console.log(Animal.generateName()); //returns a random name;

//creating an instance
const tyson = new Animal('Tyson');

//call the static method on an instance
// console.log(tyson.generateName());  //Error: tyson.generateName is not a function
