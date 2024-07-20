// Activity 3: Arrow functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result

const sum = (a, b) => sun = a + b;

console.log(sum(1, 5));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value

const isCharPresent = (str, ch) => {
    for(let i=0; i< str.length; i++){
        if(str[i] === ch){
            return true;
        }
    }
    return false;
}

console.log(isCharPresent("Harshvardhan", "a"));

