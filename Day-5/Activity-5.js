// Activity 5: Higher order Funtions : Defination -> Higher order function are those functions that can accept other function as arguements, return functions or both

// Task 9: Write a higher order function that takes a function and a number, and calls the function that many times

function highOrderFunction(callingFunction, num){
    for(let i = 1; i<= num; i++){
        callingFunction();
    }
}

function callingFunction(){
    console.log("Function called!!");
}

highOrderFunction(callingFunction, 5);

// Task 10: Write a High order function that takes two function and a value, applies the first function to the value and then applies the second function to the result

