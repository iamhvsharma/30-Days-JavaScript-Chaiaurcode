// Activity 1: If-else statements

// Task 1: Write a program to check if a number is positive, negative or zero and log the results

let num = 4;

if(num > 0){
    console.log("The given number is Positive");
} else if(num < 0){
    console.log("The given number is Negative");
} else {
    console.log("The given number is zero");
}


// Task 2: Program to check if a person if eligible to vote (age >= 18) and log the results

const age = 19;

if(age >= 18 && age <= 100){
    console.log("Person is eligible to Vote Age:", age);
} else {
    console.log("The person is not eligible to Vote Age:", age);
}