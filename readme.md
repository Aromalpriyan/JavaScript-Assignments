# JavaScript Assignments

## 01 Assignment

<p>1. Who is the founder of JavaScript and when was it founded?<p>

<p>2. What was the first browser, and when was it released?<p>

<p>3. Name the two dominant browsers in the year of 2000.<p>

<p>4. What is ECMAScript?<p>

<p>5. Define syntax.<p>

<p>6. What is TC39?<p>

<p>7. Name different data types in JavaScript.<p>

<p>8. Explain primitive and non-primitive data types.<p>

<p>9. Differentiate between null and undefined.<p>

<p>10. What is the difference between undefined and not-defined?<p>

<p>11. What is the difference between WorldWideWeb and World Wide Web?<p>

<p>12. What is the Symbol data type in JavaScript?<p>

<p>13. What is the difference between single quotes, double quotes, and backticks in JavaScript?<p>

## ✅ Output

#### 1. JavaScript was created by Brendan Eich in 1995.
#### 2. The first web browser was WorldWideWeb in 1990.
#### 3. Internet Explorer & Netscape Navigator
#### 4. ECMAScript is the standard specification that defines the core features of JavaScript. JavaScript is an implementation of ECMAScript.
#### 5. Syntax refers to the set of rules that describe how code must be written in a programming language for it to be understood by the interpreter or compiler.
#### 6. TC39 (Technical Committee 39) is the group within ECMA International responsible for developing and maintaining the ECMAScript specification.
#### 7. (a) Primitive types:
<ul>
<li>String</Li>
<li>Number</li>
<li>Boolean</li>
<li>Null</li>
<li>Undefined</li>
<li>BigInt</li>
<li>Symbol</li>
</ul>

#### (b) Non-primitive type:
<ul>
<li>Object (includes arrays, functions, dates, etc.)</li>
</ul>

#### 8. <ul>
<li>Primitive data types are immutable, basic values stored directly in memory. They include string, number, boolean, null, undefined, bigint, and symbol.</li>
<li>Non-primitive data types (objects) are mutable and stored by reference. They include objects, arrays, and functions.
</li>
</ul>

#### 9. <ul>
<li>null → An intentional absence of value. Assigned manually by a programmer.</li>
<li>undefined → A variable declared but not assigned a value yet.</li>
</ul>

#### 10. <ul>
<li>undefined → The variable exists but has no assigned value.</li>
<li>not-defined → The variable does not exist in the current scope. Accessing it causes a ReferenceError.</li>
</ul>

#### 11. <ul>
<li>WorldWideWeb → The first web browser and editor created by Tim Berners-Lee in 1990.</li>
<li>World Wide Web → The global collection of websites, pages, and resources accessible via the internet.</li>
</ul>

#### 12. Symbol is a unique and immutable primitive value, often used as object property keys to avoid naming conflicts.

#### 13. <ul>
<li>Single quotes (' ') → Used for normal strings.</li>
<li>Double quotes (" ") → Also used for normal strings (no difference from single quotes).</li>
<li>Backticks ( ) → Template literals allowing:</li>
<ul>
<li>Multi-line strings</li>
<li>String interpolation using ${...}</li>
<li>Embedding expressions</li>
</ul>
</ul>

## 02 Assignment 

**Part A: Descriptive type**

1. What is a variable in JavaScript?

2. What are the variable naming conventions in JavaScript?

3. What is the difference between declaration, initialization, and re-assignment?

4. What are the different types of scope in JavaScript?

5. What does scope mean in the context of JavaScript variables?

6. What are let, var, and const? What is the difference between them?

7. How do you determine the typeof() of a variable in JavaScript?

8. What is hoisting?
Explain with a code example.

9. What is a Temporal Dead Zone (TDZ)?

10. Create a greeting alert.
Hint: use prompt, variable message, and alert.

11. Write some code so that the values of the below variables switch around.      
let a = 5;     
let b = 8;     
// Switch the value so that a holds 8 and b holds 5.

**Part B:(MCQs)**
1. Variables defined with let cannot be redeclared.   
a. True   
b. False

2. Select whether the below JS code is valid or not:    
let x = "Hello Peter Doe";    
let x = 0;    
a. Valid   
b. Invalid

3. Select whether the below JS code is valid or not:   
var x = "John Doe";  
var x = 0;  
a. Valid  
b. Invalid

4. Variables defined with const cannot be reassigned.   
a. True   
b. False

5. Variables defined with const can be redeclared.   
a. True   
b. False

6. Select whether the below JS code is valid or not:  
const PI = 3.141592653589793;   
PI = 3.14;   
a. Valid  
b. Invalid

7. Select whether the below JS code is valid or not:   
const PI = 3.141592653589793;   
PI = PI + 10;    
a. Valid   
b. Invalid

8. A value must be assigned to a const variable when it is declared.   
a. True   
b. False   

9. Select whether the below JS code is valid or not:   
const PI;  
PI = 3.14159265359;  
a. Valid  
b. Invalid

10. Select whether the below JS code is valid or not:   
const cars = ["Ford", "Honda", "BMW"];   
cars[0] = "Nissan";   
a. Valid   
b. Invalid

11. Select whether the below JS code is valid or not:    
const cars = ["Ford", "Honda", "BMW"];   
cars = ["Toyota", "Skoda", "Audi"];   
a. Valid   
b. Invalid

12. Select whether the below JS code is valid or not:   
var x = 2;   
var x = 3;   
a. Valid    
b. Invalid

13. Select whether the below JS code is valid or not:    
const x = 2;   
{const x = 3;}  
{const x = 4;}   
a. Valid  
b. Invalid

14. What will be the console output of the below JavaScript code?  
const a = 34;   
let b = 56;   
console.log(a = b);   
a. Uncaught TypeError: Assignment to constant variable  
b. 56   
c. False   
d. 34

## ✅ Output
**Part A: Descriptive type**
#### 1. A variable is a container used to store data values that can be used and manipulated within a program.
#### 2. <ul>
<li>Must start with a letter, $, or _</li>

<li>Cannot start with a number</li>

<li>Cannot use reserved keywords</li>

<li>Case-sensitive (e.g., age and Age are different)</li>

<li>Should use camelCase for standard naming (e.g., firstName)</li>

<li>Should be meaningful and descriptive
</li>
</ul>

#### 3. <ul>
<li>Declaration: Creating a variable (e.g., let x;)</li>

<li>Initialization: Assigning a value for the first time (e.g., x = 10;)</li>

<li>Re-assignment: Assigning a new value to an existing variable (e.g., x = 20;)</li>
</ul>

#### 4. <ul>
<li>Global Scope</li>

<li>Function Scope</li>

<li>Block Scope (introduced with let and const)</li>
</ul>

#### 5. Scope defines where a variable is accessible within a program.

#### 6. <ul>
<li>var</li>
<ul>
<li>Function-scoped</li>
<li>Can be redeclared</li>
<li>Can be reassigned</li>
<li>Hoisted (initialized as undefined)</li>
</ul>

<li>let</li>
<ul>
<li>Block-scoped</li>
<li>Cannot be redeclared in the same block
</li>
<li>Can be reassigned</li>
<li>Hoisted but in TDZ</li>
</ul>

<li>const</li>
<ul>
<li>Block-scoped</li>
<li>Cannot be redeclared</li>
<li>Cannot be reassigned</li>
<li>Must be initialized when declared</li>
</ul>
</ul>

#### 7. Use the typeof operator:
```
let x = 10;
console.log(typeof x); // "number"
```

#### 8. Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation.
**Example:**
```
console.log(x);
var x = 10;
```
#### Because var x is hoisted but not its value.

#### 9. The TDZ is the period between the start of a scope and the actual declaration of a let or const variable where it cannot be accessed.

#### 10.
```
let name = prompt("Enter your name:");
let message = "Hello, " + name + "!";
alert(message);
```
#### 11. 
```
let a = 5;
let b = 8;

let temp = a;
a = b;
b = temp;
```
**Part B: MCQs**
#### 1. (a)True
#### 2. (b)Invalid
#### 3. (a)Valid
#### 4. (a)True
#### 5. (b)False
#### 6. (a)Invalid
#### 7. (b)Invalid
#### 8. (a)True
#### 9. (b)Invalid
#### 10. (a)Valid
#### 11. (b)Invalid
#### 12. (a)Valid
#### 13. (b)Valid
#### 14. (a)Uncaught TypeError: Assignment to constant variable

## 03 Assignment 

<p>1. The value of numb1 =?
Let numb1 = 12
Numb1 /= 3<p>
<p>2. What does ‘a’ equal?
Let a = 17 % 4
<p>
<p>3. What does x++ equals?
let x = 3
x++<p>
<p>4. Create a Fahrenheit to Celsius converter
C = ((F -32) * 5) / 9<p>
<p>5. Create a discount percentage calculator
discountPercentage = ((MRP – sellingPrice) * 100) / MRP
<p>
<p>6. Create a BMI Calculator 
BMI = Weight(kg) / (height(m) * height(m))<p>

## ✅ Output

#### 1.
```
let numb1 = 12
numb1/=3
console.log(numb1);
```

#### 2.
```
let a = 17 % 4
console.log(a);
```

#### 3. 
```
let x = 3
x++
console.log(x++);
```

#### 4. 
```
let F = prompt("Enter Fahrenheit:");
let C = ((F - 32) * 5) / 9;
alert("Celsius = " + C);
```

#### 5. 
```
let MRP = prompt("Enter MRP: ")
let sellingPrice = prompt("Enter Selling Price: ")
let discountPercentage = ((MRP - sellingPrice) * 100) / MRP;
alert("Discount Percentage = " + discountPercentage + "%");
```

#### 6.
```
let weight = prompt("Enter weight in kg: ")
let height = prompt("Enter height in meters: ")
let BMI = weight / (height * height);
alert("Your BMI = " + BMI)
```

## 04 Assignment
### Condition

1. Check if a number is positive or negative                     
Concept: if   
Problem: Write a program to check if a number is positive.  
Example:
Input: 5 → Output: "Positive"
________________________________________
2. Check if a number is even or odd   
Concept: if-else
________________________________________
3. Check if a person is eligible to vote    
Concept: if-else  
Age ≥ 18 → “Eligible” otherwise “Not eligible”.
________________________________________
4. Find the largest of two numbers  
Concept: if-else
________________________________________
5. Find the largest of three numbers   
Concept: if-else if-else
________________________________________
6. Check if a character is a vowel or consonant  
Concept: if-else if-else
________________________________________
7. Grade the student based on marks  
Concept: if-else if-else  
Example:
90–100 → A  
80–89 → B  
70–79 → C  
else → Fail  
________________________________________
8. Check if a number is divisible by both 3 and 5   
Concept: logical AND (&&)
________________________________________
9. Check if a number is in a range (10 to 50)   
Concept: logical AND (&&)
________________________________________
10. Check if a year is a leap year   
Concept: combined conditions (&&, ||)
________________________________________
11. Display day name based on day number  
Concept: switch  
1 → Monday  
2 → Tuesday …  
7 → Sunday  
________________________________________
 12. Basic Calculator (Add, Subtract, Multiply, Divide)  
Concept: switch  
Inputs: number1, number2, operator (+, -, *, /)  
________________________________________
13. Check if a number is zero, positive, or negative  
Concept: if-else if-else
________________________________________
14. Check if a student passed or failed  
Marks ≥ 40 → Pass  
Else → Fail
________________________________________
15. Check if a person is eligible for voting
________________________________________
 16. Check if the person has a fever (normal temperature: 98.6F)
________________________________________
17. Check if someone has normal temperature: Normal temp= (98 to 98.9)  
98.1 => normal  
99 => not normal  
97.9 => not normal  
________________________________________
18. You need to have 75% attendance to write the exam. Take the total number of classes and the number of attendances from the student and tell him if he can write the exam
________________________________________
 19. If(5>4){  
Console.log(“First if”)
}  
If(10 >= 6){  
Console.log(“Second if”)  
}  
What will the output of the above code be?
________________________________________
 20. If(true){  
Console.log(“1”)  
}  
If(false){  
Console.log(“2”)  
}  
If(true){  
Console.log(“3”)  
   }  
What will the output of the above code be?
________________________________________
21. What will be the output of the below code?

![image](./Picture1.png)
________________________________________
 22. Write a chained if / else-if statement to fill in the following conditions  
val  < 5  =>  Tiny  
val  < 10  =>  Small  
val  < 15  =>  Medium  
val  < 20  => Large  
val  >= 20  => Huge   

________________________________________
23. Use the switch case and create an application with the following roles.  
admin => gets full access  
subAdmin => gets access to create and delete courses  
testPrep => gets access to create and delete tests  
user => gets access to consume contents  
________________________________________
24. Guess the output  
let a = 5, b = 10;  
if (a > b && b > 0) {  
    console.log("X");  
} else {  
    console.log("Y");  
}
________________________________________
25. Guess the output
let day = 3;  
switch(day) {  
    case 1: console.log("Mon");  
     break;  
    case 2: console.log("Tue");  
     break;  
    case 3: console.log("Wed");  
     break;  
    default: console.log("Invalid");
}

## ✅ Output

#### 1. 
```
let num = 5;

if (num > 0) {
  console.log("Positive");
}
```

#### 2.
```
let numb = 7;

if (numb >= 2) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

#### 3.
```
let age = 19;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}
```

#### 4.
```
let a = 10
let b = 20

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
```

#### 5.
```
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
```

#### 6.
```
let ch = 'e';

if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
```

#### 7. 
```
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
```

#### 8. 
```
let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("Yes");
} else {
  console.log("No");
}
```

#### 9.
```
let num = 40;

if (num >= 10 && num <= 50) {
  console.log("In range");
} else {
  console.log("Out of range");
}
```

#### 10.
```
let year = 2022;

if ((year % 2 === 0 && year % 30 !== 0) || year % 20 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
```

#### 11.
```
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

```

#### 12.
```
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
```

#### 13.
```
let num = 2;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
```

#### 14. 
```
let marks = 30;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

#### 15.
```
let age = 20;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}
```

#### 16.
```
let temp = 100;

if (temp > 98.6) {
  console.log("Fever");
} else {
  console.log("No fever");
}
```

#### 17.
```
let tem = 98.4

if (tem >= 98 && tem <= 98.9) {
  console.log("Normal");
} else {
  console.log("Not normal");
}
```

#### 18.
```

let total = 100;
let atten = 80;

let percentage =(atten/total)*100;

if(percentage >= 75){
    console.log("Allowed for Exam");
}else{
    console.log("Not Allowed");
}
```

#### 19. <ul>
<li>First if</li>
<li>Second if</li>
</ul>

#### 20. <ul>
<li>1</li>
<li>3</li>
</ul>

#### 21.<ul>
<li>a scored half</li>
<li>b scored half</li>
<li>102</li>
</ul>

#### 22.
```
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
```

#### 23.
```
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
```

#### 24. Y

#### 25. Wed












