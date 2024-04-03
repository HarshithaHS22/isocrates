// // Type Inference: No need to mention data type it automatically takes datatype
function add(a,b){
    return a+b;
}
console.log(add(20,30));


//to create integer array
const numbers = [10, 20, 30, 40];
// Multiply each number by 3 using a for loop
for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 3;
}
// Add 50 to the array
numbers.push(50);
console.log(numbers); // Output: [30, 60, 90, 120, 50]


// Using Foreach
const number = [10, 20, 30, 40];
number.push(50);
number.forEach(num=>console.log(num*2));

//create a fun which accepts string as a parameter need to convert the string to uppercase in the output
function stringUppercase(str: string): void {
    console.log(str.toUpperCase());
}
stringUppercase("isocrates");
