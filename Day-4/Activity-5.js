// Activity 5: Loop Control Statements 

// Task 8: Program to print numbers from 1 to 10, but skip the number 5 using the continue

for(let i = 1; i<=10; i++){
    if(i === 5) {
        continue; // Skips 5
    }
    console.log(i);
        
}

// Task 9: Program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement

for(let n = 1; n <= 10; n++){
    if(n === 7){
        break;
    } else{
        console.log(n);
    }
}