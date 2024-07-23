// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array

const array = [2, 3, 5, 7, 8, 9];

const newArray = array.map((x) => x*2)

console.log("Array = ", array);
console.log("New mapped Array = ", newArray);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array

const evenOddArr = [1, 2, 4, 5, 6, 8, 7, 9];

const evenArray = evenOddArr.filter((x) => x % 2 == 0);

console.log(evenArray);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the results

const arr = [2, 4, 5, 7, 8, 6, 9]

const sum = arr.reduce((accum, curVale) => accum + curVale)

console.log(sum);