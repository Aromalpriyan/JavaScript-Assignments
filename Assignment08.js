/*
// 2. Print all elements of an array

let arr = [1,2,3,4,5];
for(let num of arr){
    console.log(num);
}

*/

// 3. Print odd numbers from 1 to 20

for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// 4. Sum of numbers from 1 to 100

let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

// 5. Multiplication table of 5

for(let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
}

/*

// 6. Reverse array [1,2,3,4,5] without using reverse()

let arr = [1,2,3,4,5];
let reversed = [];

for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
}
console.log(reversed);

*/

// 7. Factorial of a number n

function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));

// 8. Print each character of "javascript"

let str = "javascript";
for(let char of str){
    console.log(char);
}

// 9. Function to check if number is even

function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(10));
console.log(isEven(7));

// 10. Count numbers > 10 in array

function countGreaterThan10(arr){
    let count = 0;
    for(let num of arr){
        if(num > 10) 
        count++;
    }
    return count;
}
let arr = [5,12,8,20,15,3];
console.log(countGreaterThan10(arr));

// 11. Function that returns sum of array elements

function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5]));

// 12. Function that filters strings by their length

function filterByLength(arr, length){
    return arr.filter(str => str.length === length);
}
console.log(filterByLength(["hi","hello","yes","no"], 2));

// 13. Return square roots of array

let numbers = [1,4,9,16,25];

function squareRoots(arr){
    return arr.map(num => Math.sqrt(num));
}
console.log(squareRoots(numbers));

// 14. Student search function

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

// 15. FizzBuzz using while loop

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







