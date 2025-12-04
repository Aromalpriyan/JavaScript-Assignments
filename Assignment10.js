/*
// 1.

let a = 10; // global scope

function test() {
  let b = 20; // function scope
  if (true) {
    let c = 30; // block scope
  }
  console.log(b); 
}

*/

/*
// 2.

function greet(name,callback) {
  console.log("Hello " + name);
  callback();
}

greet("Aromal", function() {
  console.log("Welcome!");
});

*/
/*
// 3.

function higher(fn) {
  return fn();
}

higher(() => console.log("I am a callback"));
*/

/*
// 5. 

let outerFunction = ()=> {
    let firstName = "Jhon"
    let innerFunction = () => {
        let lastName = "wick"
        console.log(firstName + " " + lastName);
    }
    innerFunction()
}
outerFunction()

*/

/*

// 6.

function outer() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter(); // 1
counter(); // 2

*/

/*
// 7.

let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

*/

/*
// 9. spread and rest operator

//spread

let arr =[1,2,3,4,5]

let newArr = [...arr, 6,7,8,9,10]

console.log(newArr);

//rest

let sum = (a,b,...rest) => {
    console.log(a);
    console.log(b);
    console.log(rest);
}
sum(10,5,1,2,3,4)

*/

/*
// 10.

let obj = {
    userName:"John", 
    email:"user1@gmail.com",
    role:"Student",
    age:21,
    coursecount: 3,
    isLoggedIn:false,
    PaymentMode:undefined,
    sayCourseCount: function count(){
        console.log(this.coursecount);
    }
}
obj.sayCourseCount()

*/

/*
// 11.

// every()

let arr = [1,2,3,4,5,6,7,8,9]

let result = arr.every((item) => {

    return item % 2 !== 0
})
console.log(result);

// some()

let arr = [1,6,4,8]

let result = arr.some((item) => {

    return item % 2 !== 0
})
console.log(result);

// filter()

let arr = [1,2,3,4,5,6,7,8,9];

let evenArr = arr.filter((item)=>{
    return item % 2 == 0
})

console.log(evenArr);

// map()

let collection = ["kids","toys","furniture","ladies","mens","clock"]

  collection.map((item) => {
    console.log(item);
})

// forEach()

let nums = [10, 20, 30];

nums.forEach(n => console.log(n));

// reduce()

let arr = [100,20,10,5]

let output= arr.reduce((accumulator, amount) => {
    return accumulator+amount
})
console.log(output);

*/