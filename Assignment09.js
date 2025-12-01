/*

// 1. Square star pattern

let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(j = 1; j <= n; j++){
        str += "* "
    }
    str += "\n"
}
console.log(str);

*/

/*

// 2. Left triangle pattern

let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(j = 1; j <= i; j++){
        str += "* "
    }
    str += "\n"
}
console.log(str);
*/

/*

// 3. Inverted left triangle pattern

let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(j = 1; j <= n-i+1 ; j++){
        str += "* "
    }
    str += "\n"
}
console.log(str);
*/

/*

// 4. Right angle pattern
 
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

*/

/*

// 5.Inverted right angle pattern

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

*/

/*

// 6. Pyramid

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

*/
 
/*

// 7. Inverted pyramid

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

*/

/*

// 8. Square number pattern

let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(j = 1; j <= n; j++){
        str += i + " "
    }
    str += "\n"
}
console.log(str);

*/

/*

// 9. Square number pattern

let n = 5
let str = ""

for(i = 1; i <= n; i++){
    for(j = 1; j <= n; j++){
        str += j + " "
    }
    str += "\n"
}
console.log(str);
 
*/

/*

// 10. hollow square pattern

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

*/
 



























