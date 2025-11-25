// 1.Check whether input is an array

function isArray(input) {
  return Array.isArray(input);
}
console.log(isArray([1, 2, 3]));

// 2.Function to return the first element of an array

function firstElement(arr){
  return arr[0];
}
console.log(firstElement([10, 20, 30]));

// 3.Function to return the last element of an array

function lastElement(arr) {
  return arr[2];
}
console.log(lastElement([10, 20, 30]));

// 4.Join all elements of an array into a string

let myColor = ["Red", "Green", "White", "Black"];

function joinColors(colors) {
  return colors.join(", ");
}
console.log(joinColors(myColor));

// 5.Insert dashes between each digit of a number

function dashNumber(num) {
  return num.toString().split("").join("-");
}
console.log(dashNumber(925468));


// 6.Check if a number is even or odd

let isEven = (num) => {
  return num % 2 === 0 ? true : false;
}
console.log(isEven(10));

// 7.Guest list check function

let guestList = ["Aromal", "Leo", "Pedri", "Gavi"];

function checkGuest(name) {
  return guestList.includes(name) ? "Welcome" : "Sorry, good luck next time";
}
console.log(checkGuest("Aromal"));
console.log(checkGuest("Yamal"));

// 8.Reverse a given number

function reverseNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNumber(123456789));

// 9.Convert first letter to uppercase

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("javascript"));

