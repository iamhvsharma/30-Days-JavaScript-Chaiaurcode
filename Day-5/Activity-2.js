// Activity 2: Function expression 

// Task 3: Write a function to find the maximum of two numbers and log the results 

function maxNum(a, b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}

console.log(` The greatest number is ${maxNum(5, 6)}`);

// Task 4: Write a function expression to concatenate two strings and return result


function joinStr(str1, str2){
    joinStr = str1 + str2;
    return joinStr
}

console.log(joinStr("Hello", " Duniya"));

