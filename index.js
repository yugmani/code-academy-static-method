// Import stylesheets
import './style.css';

//Example of static method
// ***************************************

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


//Task
// **************************************

// 1. Inside of your HospitalEmployee class, create a static method called generatePassword. When it’s called, this method should return a random integer between zero and 10,000.

//parent class: HospitalEmployee
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  // static method
  static generatePassword(){
    return Math.floor(Math.random()*10000);
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

//child class: Nurse
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

//call static method
console.log(HospitalEmployee.generatePassword()); //5884 -> a random number.

//call static method on Nurse class
console.log(Nurse.generatePassword()); //9393 -  a random number;

// create a Doctor class that inherits from HospitalEmployee. The properties and methods for the Doctor class are listed below:

class Doctor extends HospitalEmployee {
  constructor(name, insurance){
 super(name);
    this._insurance = insurance;
  }

  get insurance(){
    return this._insurance;
  }
}

//create an instance;
const cardiologist = new Doctor("Shawn", "Kaiser");
console.log(cardiologist.name);   //Shawn
console.log(cardiologist.insurance)   //Kaiser

//call static method on Doctor class
console.log(Doctor.generatePassword()); //3044 ->a random number
