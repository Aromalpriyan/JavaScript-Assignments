// 1. Find String Length

let str = "Hello";
    console.log(str.length);

// 2. Convert to Uppercase and Lowercase

let strg = "JavaScript";
    console.log(strg.toUpperCase()); 
    console.log(strg.toLowerCase());

// 3. Check if a String Contains a Word 

let text = "Hello World";
    console.log(text.includes("World")); 

// 4. Find the Index of a Substring

let substr = "JavaScript is fun";
    console.log(substr.indexOf("fun"));

// 5. Extract Part of a String

let word = "Programming";
    console.log(word.slice(3,7));

// 6. Replace a Word

let msg = "This is a bad idea";
    console.log(msg.replace("bad", "good"));

// 7. Split a Sentence into Words

let sentence = "I love coding in JS";
    console.log(sentence.split(" "));

// 8. Check String Start and End

let strig = "JavaScript";
    console.log(strig.startsWith("Java"));
    console.log(strig.endsWith("Script"));

// 9. Repeat a Word

console.log("Ha".repeat(5));

// 10. Trim Extra Spaces

let txt = "   Hello World   ";
    console.log(txt.trim());

// 11. Greeting App – First Letter Capitalized

let name = "aROMAL";
let first = name[0].toUpperCase();
let rest = name.slice(1).toLowerCase();
let finalName = first + rest;
    console.log("Hello " + finalName);


