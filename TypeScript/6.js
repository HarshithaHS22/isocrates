// OOPS CONCEPT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Class
var Person = /** @class */ (function () {
    // Constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    Person.prototype.greet = function () {
        console.log("Hi, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old"));
    };
    return Person;
}());
// Object creation
var p1 = new Person('Harshitha', 5); // Separate name and age with a comma
p1.greet();
// ACCESS MODIFIERS:
var Employee = /** @class */ (function () {
    function Employee() {
        this.hikePercentage = 0.15;
        this.salary = 20000;
    }
    Employee.prototype.hike = function () {
        this.salary = this.salary + this.hikePercentage; //15%
        return this.salary;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (amount) {
        this.salary = amount;
    };
    return Employee;
}());
var Bi = /** @class */ (function (_super) {
    __extends(Bi, _super);
    function Bi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bi.prototype.bonus = function () {
        console.log("I got yearly bonus");
    };
    return Bi;
}(Employee));
var Harshitha = new Employee();
Harshitha.setSalary(500000);
console.log(Harshitha.getSalary());
console.log(Harshitha.hike());
var Harsh = new Bi();
Harsh.setSalary(600000);
console.log(Harsh.getSalary());
console.log(Harsh.hike());
console.log(Harsh.bonus());
// ABSTRACT CLASSES - which are abstract methods declared shld be implemented
var CompanyLaws = /** @class */ (function () {
    function CompanyLaws() {
    }
    return CompanyLaws;
}());
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Company.prototype.salaryDate = function () {
        console.log('salary date is 5th of every month');
    };
    return Company;
}(CompanyLaws));
var isocrates = new Company();
isocrates.salaryDate();
