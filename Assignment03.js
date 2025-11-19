// 1. The value of numb1 = ?

let numb1 = 12
numb1/=3
console.log(numb1);

// 2. What does ‘a’ equal?

let a = 17 % 4
console.log(a);

// 3. What does x++ equal?

let x = 3
x++
console.log(x++);

// 4. Fahrenheit to Celsius converter

let F = prompt("Enter Fahrenheit:");
let C = ((F - 32) * 5) / 9;
alert("Celsius = " + C);

// 5. Discount percentage calculator

let MRP = prompt("Enter MRP: ")
let sellingPrice = prompt("Enter Selling Price: ")
let discountPercentage = ((MRP - sellingPrice) * 100) / MRP;
alert("Discount Percentage = " + discountPercentage + "%");


// 6. BMI Calculator

let weight = prompt("Enter weight in kg: ")
let height = prompt("Enter height in meters: ")
let BMI = weight / (height * height);
alert("Your BMI = " + BMI)