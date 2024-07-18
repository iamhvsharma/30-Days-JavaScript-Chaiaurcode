// Activity 5: Combining Condition

// Task 7: Program to check if a year is a leap year using multiple conditions (divisible by 4 but not 100  unless also divisible by 400) and log the results

const year = 1700

// My Approach

// if( year % 4 == 0) {
//     if(year % 100 != 0){
//         console.log("The entered year is Leap year");
//     } else if(year % 400 == 0){
//         console.log("The entered Year is a Leap year");
//     } else{
//         console.log("The entered year is not a leap year");
//     }
// } else{
//     console.log("The entered year is not a leap year");
// }

// Optimised Approach

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
