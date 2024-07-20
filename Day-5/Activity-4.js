// Activity 4: Function Parameters and Default values

// Task 1: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter


function calProduct(num1, num2=8){
    return num1 * num2;
}

console.log(calProduct(8, 4));
console.log(calProduct(8)); // When no value of num2 is passed it takes default value


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide default value for age

const greetMssg = (name, age=18) => {
    return `Congratulations ${name} you turned ${age}, may god bless you `
}

console.log(greetMssg("Harshvardhan", 20));