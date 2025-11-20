/*
// 1. Check if a number is positive

let num = 5;

if (num > 0) {
  console.log("Positive");
}
*/

// 2. Check if a number is even or odd

let numb = 7;

if (numb >= 2) {
  console.log("Even");
} else {
  console.log("Odd");
}

/*
// 3. Check if a person is eligible to vote

let age = 19;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}
*/

/*
// 4. Largest of two numbers

let a = 10
let b = 20

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
*/

// 5. Largest of three numbers

let a = 12
let b = 25
let c = 20

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

// 6. Check vowel or consonant

let ch = 'e';

if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

/*
// 7. Grade student

let marks = 85;

if (marks >= 90 && marks <= 100) {
  console.log("A");
} else if (marks >= 80 && marks <= 89) {
  console.log("B");
} else if (marks >= 70 && marks <=79) {
  console.log("C");
} else {
  console.log("Fail");
}
*/

/*
// 8. Divisible by both 3 and 5

let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("Yes");
} else {
  console.log("No");
}
*/
/*
// 9. Number in range (10–50) 

let num = 40;

if (num >= 10 && num <= 50) {
  console.log("In range");
} else {
  console.log("Out of range");
}
*/

// 10. Check leap year

let year = 2022;

if ((year % 2 === 0 && year % 30 !== 0) || year % 20 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

// 11. Display day name using switch

let day = 4;

switch(day) {
  case 1:  
  console.log("Monday"); 
  break;
  case 2:   
  console.log("Tuesday"); 
  break;
  case 3: 
  console.log("Wednesday"); 
  break;
  case 4: 
  console.log("Thursday"); 
  break;
  case 5: 
  console.log("Friday"); 
  break;
  case 6: 
  console.log("Saturday"); 
  break;
  case 7: 
  console.log("Sunday"); 
  break;
  default: 
  console.log("Invalid");
}

// 12. Basic Calculator

let d = 10
let e = 5
let op = '+'

switch(op) {
  case '+': 
    console.log(d + e); 
    break;
  case '-': 
    console.log(d - e); 
    break;
  case '*': 
    console.log(d * e); 
    break;
  case '/': 
    console.log(d / e); 
    break;
  default: 
    console.log("Invalid operator");
}

/*
// 13. Zero, Positive, Negative

let num = 2;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
*/

// 14. Student pass or fail

let marks = 30;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 15. Check voting eligibility

let age = 20;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}

// 16. Check fever (normal = 98.6°F)

let temp = 100;

if (temp > 98.6) {
  console.log("Fever");
} else {
  console.log("No fever");
}

// 17. Normal temperature range (98 – 98.9)

let tem = 98.4

if (tem >= 98 && tem <= 98.9) {
  console.log("Normal");
} else {
  console.log("Not normal");
}

// 18. Attendance eligibility (75%)

let total = 100;
let atten = 80;

let percentage =(atten/total)*100;

if(percentage >= 75){
    console.log("Allowed for Exam");
}else{
    console.log("Not Allowed");
}

// 22. Chained if/else-if

let val = 18;

if(val < 5){
    console.log("Tiny");
}else if(val < 10){
    console.log("Small");
}else if(val < 15){
    console.log("Medium");
}else if(val < 20){
    console.log("Large");
}else{
     console.log("Huge");
}

// 23. Switch – Role System

let role = "admin";

switch(role) {
  case "admin":
    console.log("Full access");
    break;

  case "subAdmin":
    console.log("Can create/delete courses");
    break;

  case "testPrep":
    console.log("Can create/delete tests");
    break;

  case "user":
    console.log("Can consume content");
    break;

  default:
    console.log("Invalid role");
}

// 24. 