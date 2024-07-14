// Activity - 1: Variable Declaration 

var num = 10;
console.log(num);

let name = "Harsh";
console.log(name);

// Activity - 2: Constant Declarartion

const isHarsh = true;
console.log(isHarsh);

// Activity - 3: Data Types


const username = "thedevharsh";
console.log(typeof(username)); // -> Gives String

const pass = 123456;
console.log(typeof(pass)); // -> Gives Number

const isPassValid = true;
console.log(typeof(isPassValid)); // -> Gives Boolean

const idPass = {
    name: "Harshvardhan",
    pass: 123456,

    name: "Ram",
    pass: 987433,

    name: "Shyam",
    pass: 74736,

    name: "Munna",
    pass: 978374,
}
console.log(typeof(idPass)) // -> Gives Object

const rollNo = [1, 2, 3, 4, 5, 6]; 
console.log(typeof(rollNo)) // -> Gives Object (But its array)

// Activity - 4: Reassigning Variables

let customerId = 101;

console.log("Customer ID = ", customerId);

customerId = 102;
console.log("Customer ID = ", customerId);

// Value is reassigned if the variable is declared with "let" keyword

// Activity - 5: Understanding Const

const empId = 201;
console.log("Employee ID = ", empId); 

empId = 202;
console.log("Employee ID = ", empId); 

// On reassigning a value into a variable declared by const 
// This error occurs "TypeError: Assignment to constant variable."


// Day 1 Complete! <3