// Functions 

//Optional Parameters in Functions:
function greet(name? : String):void{
    if(name){
        console.log(`Hello ${name}`);
    }
    else{
        console.log("Hello, New User");
    }
}
greet(); // Fun without parameter
greet("virat");


// default Parameter - if user not passed any parameters
function greet2(name: String = "Harshitha"):void{
    if(name){
        console.log(`Hello ${name}`);
    }
    else{
        console.log("Hello, New User");
    }
}
greet2(); // Fun without parameter
greet2("virat");


//Rest Parameters:
function sum(...numbers: number[]): void{
    let total=0;
    for(let num of numbers){
        total+=num;
    }
    console.log(total);
}
sum(1,3,5,6,3);


// Function overloading
function reverse(str: string): string;
function reverse(arr: number[]): number[];
function reverse(value: string | number[]): string | number[] {
    if (typeof value === "string") {
        return value.split("").reverse().join("");
    } else {
        return value.slice().reverse();
    }
}

console.log(reverse("isocrates")); // Output: 'setarcosi'
console.log(reverse([12, 34, 56, 35, 73])); // Output: [73, 35, 56, 34, 12]

