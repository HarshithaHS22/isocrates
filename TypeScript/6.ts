// OOPS CONCEPT

// 1. Class
class Person {
    name: string;
    age: number;
    
    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    greet() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
}

// Object creation
let p1 = new Person('Harshitha', 5); // Separate name and age with a comma
p1.greet();


// ACCESS MODIFIERS:
class Employee{
    private salary: number;
    readonly hikePercentage: number =0.15;
    constructor(){
        this.salary=20000;
    }
    hike(){
        this.salary=this.salary + this.hikePercentage;   //15%
        return this.salary;
    }
    getSalary(): number{
        return this.salary;
    }

    setSalary(amount: number): void{
        this.salary=amount;
    }
    
    
}
class Bi  extends Employee{
    bonus(){
        console.log("I got yearly bonus");
    }

}
let Harshitha = new Employee();
Harshitha.setSalary(500000);
console.log(Harshitha.getSalary());
console.log(Harshitha.hike());

let Harsh = new Bi();
Harsh.setSalary(600000);
console.log(Harsh.getSalary());
console.log(Harsh.hike());
console.log(Harsh.bonus());



// ABSTRACT CLASSES - which are abstract methods declared shld be implemented

abstract class CompanyLaws{
    abstract salaryDate(): void;
}
class Company extends CompanyLaws{
    salaryDate(){
        console.log('salary date is 5th of every month');
    }

}
let isocrates = new Company();
isocrates.salaryDate();