// Activity - 3: Do While Loop

// Task 5: Program to print numbers from 1 to 5 using do while loop

let i = 1;

do{
    console.log(i);
    i++;
} while(i<=5)

console.log("-----------------------------------");

// Task 6: Program to calculate the factorial of a number using a do while loop

let fact = 1; // Variable to store the factorial value
let num = 5 ; // Number whose factorial we need to find
let n = 1; // Loop counter

do{
    fact = fact * n;
    n++
} while(n <= num);

console.log(`The factorial of ${num} is ${fact}`);
