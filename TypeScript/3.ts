let counter: number = 5;
let active: boolean = true;

// Array
let ArrayName: string[] = ['Harshitha', 'Ranjitha', 'Pallavi'];

// Objects
let person: {
    name: string;
    age: number;
};
person = {
    name: 'Bipin',
    age: 5
};

// Functions
let greeting: (names: string) => string; //Arrow function
greeting = function(names: string) {
    return 'Hi ' + names;
};
console.log(greeting("Harshitha")); // Output: Hi Harshitha
