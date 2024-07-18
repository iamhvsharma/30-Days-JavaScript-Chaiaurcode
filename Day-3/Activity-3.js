// Activity 3: Switch Case

// Task 4: Program that uses a switch case to determine the day of the week based on a number (1-7)

const day = 4 // Enter a day number 1-7

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thrusday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Enter a day number between (1-7)");
}


// Task 5: Program that uses switch case to assign a grade (A - F) based on a score and log the grade

const marks = 90;
let grade;

switch(true){
    case marks >= 90:
        grade = 'A'
        break;
    case marks >= 80:
        grade = 'B'
        break;
    case marks >= 70:
        grade = 'C'
        break;
    case marks >= 60:
        grade = 'D'
        break;
    case marks >= 50:
        grade = 'E'
        break;
    case marks >= 40:
        grade = 'E+'
        break;
    default:
        grade = 'F';
}

console.log("Grade: ", grade);