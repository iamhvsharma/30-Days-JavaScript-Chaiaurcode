// Activity 4: Nested loops

// Task 7: Program to print a pattern using nested for loops

/*

*
* *
* * *
* * * *
* * * * *

*/

// row = 5 column = row

let row = 5;

for(let i = 1; i <= row; i++){
    let pattern = "";
    for(let j = 1; j <= i; j++){
        pattern += "* "
    } 
    console.log(pattern.trim()); // Print the stars for the current row
}