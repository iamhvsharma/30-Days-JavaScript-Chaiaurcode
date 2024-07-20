// Activity - 1: Function Declaration

// Task 1: Write a functino to check if a number is even or odd and log the result
function evenOdd(num){
    if(num % 2 === 0) {
        return "Even"
    } else{
        return "Odd"
    }
}

console.log(evenOdd(123));

// Task 2 : Write a function to calculate the square of a number and return the result

function calSquare(n){
 let square = n * n;
 return square;
}

console.log(calSquare(9));