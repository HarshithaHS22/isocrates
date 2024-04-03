// Functions 
//Optional Parameters in Functions:
function greet(name) {
    if (name) {
        console.log("Hello ".concat(name));
    }
    else {
        console.log("Hello, New User");
    }
}
greet(); // Fun without parameter
greet("virat");
// default Parameter - if user not passed any parameters
function greet2(name) {
    if (name === void 0) { name = "Harshitha"; }
    if (name) {
        console.log("Hello ".concat(name));
    }
    else {
        console.log("Hello, New User");
    }
}
greet2(); // Fun without parameter
greet2("virat");
//Rest Parameters:
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        total += num;
    }
    console.log(total);
}
sum(1, 3, 5, 6, 3);
function reverse(value) {
    if (typeof value === "string") {
        return value.split("").reverse().join("");
    }
    else {
        return value.slice().reverse();
    }
}
console.log(reverse("isocrates")); // Output: 'setarcosi'
console.log(reverse([12, 34, 56, 35, 73])); // Output: [73, 35, 56, 34, 12]
