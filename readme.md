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

![image](./Picture1(Ass04).png)
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

## 05 Assignment
### String Methods
**1. Find String Length**  
Write a program to find the length of a string using .length.  

**2. Convert to Uppercase and Lowercase**  
Take a string and print it in both uppercase (.toUpperCase()) and lowercase (.toLowerCase()).

**3. Check if a String Contains a Word**  
Use .includes() to check whether the string "Hello World" contains "World".

**4. Find the Index of a Substring**  
Given "JavaScript is fun", find the index of "fun" using .indexOf().

**5. Extract a Part of a String**  
From "Programming", extract "gram" using .slice().

**6. Replace a Word**  
Replace "bad" with "good" in the string "This is a bad idea" using .replace().

**7. Split a Sentence into Words**  
Convert "I love coding in JS" into an array of words using .split(" ").

**8. Check String Start and End**  
Check if the string "JavaScript" starts with "Java" and ends with "Script" using .startsWith() and .endsWith().

**9. Repeat a Word**  
Print "Ha" 5 times using .repeat().

**10. Trim Extra Spaces**  
Remove spaces from " Hello World " using .trim().

**11. Create a simple app that takes the user’s name and greets him/her after capitalizing the first letter of the user’s name and changing the rest of the letters into lowercase.**  
(toUpperCase(), toLowerCase(), slice(), length property, stringConcatination)

## ✅ Output

#### 1. 
```
let str = "Hello";
    console.log(str.length);
```

#### 2.
```
let strg = "JavaScript";
    console.log(strg.toUpperCase()); 
    console.log(strg.toLowerCase());
```

#### 3.
```
let text = "Hello World";
    console.log(text.includes("World")); 
```

#### 4.
```
let substr = "JavaScript is fun";
    console.log(substr.indexOf("fun"));
```

#### 5.
```
let word = "Programming";
    console.log(word.slice(3,7));
```

#### 6.
```
let msg = "This is a bad idea";
    console.log(msg.replace("bad", "good"));
```

#### 7.
```
let sentence = "I love coding in JS";
    console.log(sentence.split(" "));
  
```

#### 8. 
```
let strig = "JavaScript";
    console.log(strig.startsWith("Java"));
    console.log(strig.endsWith("Script"));
```

#### 9. 
```
console.log("Ha".repeat(5));
```

#### 10.
```
let txt = "   Hello World   ";
    console.log(txt.trim());
```

#### 11.
```

let name = "aROMAL";
let first = name[0].toUpperCase();
let rest = name.slice(1).toLowerCase();
let finalName = first + rest;
    console.log("Hello " + finalName);
```

## 06 Assignment
#### <p>1. Write short notes on Array methods with a code example</p>
<ul>
<li>push()</li>
<li>pop()</li>
<li>shift()</li>
<li>unshift()</li>
<li>includes()</li>
<li>toString()</li>
<li>reverse()</li>
<li>join()</li>
<li>concat()</li>
<li>flat()</li>
<li>slice()</li>
<li>splice()</li>
<li>sort()</li>
<li>fill()</li>
</ul>

## ✅ Output

#### 1. push()
<ul>
<li>Adds one or more elements to the end of an array.</li>
</ul>

##### Example :
```
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```

#### 2. pop()
<ul>
<li>Removes the last element of an array.</li>
</ul>

##### Example :
```
let arr = [1, 2, 3];
arr.pop();
console.log(arr); // [1,2]
```

#### 3. shift()
<ul>
<li>Removes the first element from an array.</li>
</ul>

##### Example :
```
let arr = [10, 20, 30];
arr.shift();
console.log(arr); // [20, 30]
```

#### 4. unshift()
<ul>
<li>Adds one or more elements to the beginning of an array.</li>
</ul>

##### Example :
```
let arr = [20, 30];
arr.unshift(10);
console.log(arr); // [10, 20, 30]
```

#### 5. includes()
<ul>
<li>Checks if an array contains a specific value. Returns true or false.</li>
</ul>

##### Example :
```
let arr = ["apple", "banana"];
console.log(arr.includes("banana")); // true
```

#### 6. toString()
<ul>
<li>Converts an array into a string.</li>
</ul>

##### Example :
```
let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

#### 7. reverse()
<ul>
<li>Reverses the order of array elements.</li>
</ul>

##### Example :
```
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

#### 8. join()
<ul>
<li>Joins all array elements into a string with a separator.</li>
</ul>

##### Example :
```
let arr = ["A", "B", "C"];
console.log(arr.join("-")); // "A-B-C"
```

#### 9. concat()
<ul>
<li>Merges two or more arrays into a new array.</li>
</ul>

##### Example :
```
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]
```

#### 10. flat()
<ul>
<li>Flattens nested arrays into a single array.</li>
</ul>

##### Example :
```
let arr = [1, [2, 3], [4, [5]]];
console.log(arr.flat(2)); // [1, 2, 3, 4, 5]
```

#### 11. slice()
<ul>
<li>Returns a portion of an array (does not modify original).</li>
</ul>

##### Example :
```
let arr = [10, 20, 30, 40];
console.log(arr.slice(1, 3)); // [20, 30]
```

#### 12. splice()
<ul>
<li>Adds, removes, or replaces elements (modifies original array).</li>
</ul>

##### Example :
```
let arr = [10, 20, 30, 40];
arr.splice(1, 2, 99);  
console.log(arr); // [10, 99, 40]
```

#### 13. sort()
<ul>
<li>Sorts elements of an array.</li>
</ul>

##### Example :
```
let arr = [3, 1, 4, 2];
arr.sort();
console.log(arr); // [1, 2, 3, 4]
```

#### 14. fill()
<ul>
<li>Fills all or part of an array with a value.</li>
</ul>

##### Example :
```
let arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr); // [1, 0, 0, 4]
```

## 07 Assignment

<p>1. Write a JavaScript function to check whether an `input` is an array.</p>
<ul>(Array.isArray([1,2,3]))</ul>

<p>2. Write a JavaScript function that takes an array as an argument and returns the first element of the array.</p>

<p>3. Write a JavaScript function that takes an array as an argument and returns the last element of the array.</p>

<p>4. Write a simple JavaScript function to join all elements of the following array into a string.</p>
<ul>Sample array : myColor = ["Red", "Green", "White", "Black"];</ul>

<p>5. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each.</p> 
<ul>For example : if you accept 925468 the output should be 9-2-5-4-6-8
(toString().split().join())</ul>

<p>6. Write a JavaScript function that checks if the given number is even or odd then returns a Boolean value (use: arrow function, return keyword, ternary operator)</p>

<p>7. Create an array of guestList. Write a javascript function that takes the user’s name as an argument and checks whether it is in the guestlist. If yes, return the string “Welcome” else, return “Sorry, good luck next time”.</p>

<p>8. Write a javascript function that reverses a given number.
<ul>Example : 123456789 => 987654321 (toString(), split(), reverse (), join())</ul>

<p>9. Write a JavaScript function that accepts a string as a parameter and converts the first letter into upper case.</p>
<ul>Example : “javascript” => “Javascript”</ul>

## ✅ Output

#### 1.
```
function isArray(input) {
  return Array.isArray(input);
}
console.log(isArray([1, 2, 3])); // true
```

#### 2. 
```
function firstElement(arr) {
  return arr[0];
}
console.log(firstElement([10, 20, 30])); // 10
```

#### 3. 
```
function lastElement(arr) {
  return arr[2];
}
console.log(lastElement([10, 20, 30])); // 30
```

#### 4.
```
let myColor = ["Red", "Green", "White", "Black"];

function joinColors(colors) {
  return colors.join(", ");
}
console.log(joinColors(myColor)); // Red, Green, White, Black
```

#### 5.
```
function dashNumber(num) {
  return num.toString().split("").join("-");
}
console.log(dashNumber(925468)); // 9-2-5-4-6-8
```

#### 6.
```
let isEven = (num) => {
  return num % 2 === 0 ? true : false;
}
console.log(isEven(10)); // true
```

#### 7.
```
let guestList = ["Aromal", "Leo", "Pedri", "Gavi"];

function checkGuest(name) {
  return guestList.includes(name) ? "Welcome" : "Sorry, good luck next time";
}
console.log(checkGuest("Aromal")); // Welcome
console.log(checkGuest("Yamal"));  // Sorry, good luck next time
```

#### 8.
```
function reverseNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNumber(123456789)); // 987654321
```

#### 9.
```
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("javascript")); // Javascript
```

## 08 Assignment

<p>1. Write short notes on the below with code examples</p>
<ul>
<li>while loop</li>
<li>do-while loop</li>
<li>for loop</li>
<li>for in loop</li>
<li>for of loop</li>
</ul>
<p>2. Print all the elements of an array.</p>
<p>3. Print the odd numbers from 1 to 20.</p>
<p>4. Find the sum of numbers from 1 to 100.</p>
<p>5. Print the multiplication table of 5 using for loop.</p>
<p>6. Reverse the given array [1,2,3,4,5] without using .reverse().</p>
<p>7. Find the factorial of a given number n;</p>
<p>8. Print each character of a string “javascript”.</p>
<p>9. Write a function that checkes if the given number is even and return Boolean value.</p>
<p>10. You are given an arr = [5,12,8,20,15,3]. Write a function that returns the count of numbers that are greater than 10.</p>
<p>11. write a function that takes an array of numbers as an argument and returns the sum of its elements.</p>
<p>12. Create a function that filters strings in an array by their length.</p>
<p>13. Create a function that returns a new array containing the square roots of each number in the original array [1,4,9,16,25]
(Math.sqrt())</p>
<p>14. Create an array with 5 student’s names. Then create a function that takes two parameters (allStudents and studentName). Iterate over all the students and find that specific user ‘studentName’</p>
<p>15. Write a function that prints the number 1 to 100. But for multiples of 3, print Fizz instead of the number, and for multiples of 5, print Buzz. For the numbers that are multiples of both 3 and 5, print FizzBuzz(use while loop)</p>

## ✅ Output

#### 1.
<ul>
<li>while loop</li>
Runs as long as the condition is true.
</ul>

#### Example:

```
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}
```
<ul>
<li>do–while loop</li>
Runs the block at least once, then checks condition.
</ul>

#### Example:

```
let i = 1;
do {
    console.log(i);
    i++;
} while(i <= 5);
```
<ul>
<li>for loop</li>
Used when you know how many times to run.
</ul>

#### Example:

```
for(let i = 1; i <= 5; i++){
    console.log(i);
}
```
<ul>
<li>for in loop</li>
Used to loop over object properties or array indexes.
</ul>

#### Example:

```
let arr = [10,20,30];
for(let index in arr){
    console.log(index, arr[index]);
}
```
<ul>
<li>for of loop</li>
Used to loop directly over array values.
</ul>

#### Example:

```
let arr = [10,20,30];
for(let value of arr){
    console.log(value);
}
```

#### 2.
```
let arr = [1,2,3,4,5];
for(let num of arr){
    console.log(num);
}
```

#### 3.
```
for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
```

#### 4.
```
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);
```

#### 5.
```
for(let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
}
```

#### 6.
```
let arr = [1,2,3,4,5];
let reversed = [];

for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
}
console.log(reversed);
```

#### 7. 
```
function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120
```

#### 8.
```
let str = "javascript";
for(let char of str){
    console.log(char);
}
```

#### 9.
```
function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(10)); // true
console.log(isEven(7));  // false
```

#### 10.
```
function countGreaterThan10(arr){
    let count = 0;
    for(let num of arr){
        if(num > 10) 
        count++;
    }
    return count;
}
let arr = [5,12,8,20,15,3];
console.log(countGreaterThan10(arr)); // 3
```

#### 11.
```
function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5])); // 15
```

#### 12.
```
function filterByLength(arr, length){
    return arr.filter(str => str.length === length);
}
console.log(filterByLength(["hi","hello","yes","no"], 2));
// ["hi","no"]
```

#### 13.
```
let numbers = [1,4,9,16,25];

function squareRoots(arr){
    return arr.map(num => Math.sqrt(num));
}
console.log(squareRoots(numbers)); // [1,2,3,4,5]
```

#### 14.
```
let students = ["Aromal", "Leo", "Pedri", "Gavi", "Olma"];

function findStudent(allStudents, studentName){
    for(let student of allStudents){
        if(student === studentName){
            return "Student Found";
        }
    }
    return "Student Not Found";
}
console.log(findStudent(students, "Leo"));
```

#### 15.
```

let i = 1;

while(i <= 100){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
    i++;
}
```

## 09 Assignment

#### <p>Create the below patterns using JavaScript</p>
1. Square star pattern

<ul>

![image](./Pic%2001(Ass09).png)

</ul>

2. Left triangle pattern

<ul>

![image](./Pic%2002(Ass09).png)

</ul>
 
3. Inverted left triangle pattern

<ul>

![image](./Pic%2003(.Ass09).png)

</ul>
     
4. Right angle pattern

<ul>

![image](./Pic%2004(Ass09).png)

</ul>
 
5. Inverted right angle pattern

<ul>

![image](./Pic%2005(Ass09).png)

</ul>

6. Pyramid

<ul>

![image](./Pic%2006(Ass09).png)

</ul>
 
7. Inverted pyramid

<ul>

![image](./Pic%2007(Ass09).png)

</ul>
 
8. Square number pattern

<ul>

![image](./Pic%2008(Ass09).png)

</ul>
 
9. Square number pattern

<ul>

![image](./Pic%2009(Ass09).png)

</ul>
 
10. hollow square pattern

<ul>

![image](./Pic%2010(Ass09).png)

</ul> 

## ✅ Output

#### 1.
```
let n = 5
let str = ""
for(i = 1; i <= n; i++){
    for(j = 1; j <= n; j++){
        str += "* "
    }
    str += "\n"
}
console.log(str);
```

#### 2.
```
let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(j = 1; j <= i; j++){
        str += "* "
    }
    str += "\n"
}
console.log(str);
```

#### 3.
```
let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(j = 1; j <= n-i+1 ; j++){
        str += "* "
    }
    str += "\n"
}
console.log(str);
```

#### 4.
```
let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(k = 1; k <= n-i; k++){
        str += " "
    }
    for(j = 1; j <= i ; j++){
        str += "*"
    }
    str += "\n"
}
console.log(str);
```

#### 5.
```
let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(k = 1; k <= i-1; k++){
        str += " "
    }
    for(j = 1; j <= n-i+1 ; j++){
        str += "*"
    }
    str += "\n"
}
console.log(str);
```

#### 6.
```
let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(k = 1; k <= n-i; k++){
        str += " "
    }
    for(j = 1; j <= i ; j++){
        str += "* "
    }
    str += "\n"
}
console.log(str);
```

#### 7.
```
let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(k = 1; k <= i-1; k++){
        str += " "
    }
    for(j = 1; j <= n-i+1 ; j++){
        str += "* "
    }
    str += "\n"
}
console.log(str);
```

#### 8.
```
let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(j = 1; j <= n; j++){
        str += i + " "
    }
    str += "\n"
}
console.log(str);
```

#### 9.
```
let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(j = 1; j <= n; j++){
        str += j + " "
    }
    str += "\n"
}
console.log(str);
```

#### 10.
```
let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(j = 1; j <= n; j++){
      if(i === 1 || i === 5 || j === 1 || j === 5){
        str += "* "
      }else{
        str += " " + " "
      }
    }
    str += "\n"
}
console.log(str);
```





































