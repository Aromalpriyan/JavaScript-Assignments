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












