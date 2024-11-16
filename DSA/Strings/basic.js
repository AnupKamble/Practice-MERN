
let str = "My name is Anup"
let str2 = " I'm a software engineer"

function check() {
   str = "My name is Anup 2"
}
// check();
let b = str.charAt(6)
let a = str.length-1;

// console.log( "6th letter " +b);
// console.log(a)

for ( var i=0; i<str.length; i++ ) {
    let b = str.charAt(6)
    
}

//  ----------------- Concat -----------------
//  To Join the 2 strings

let concat = str.concat(str2)
// console.log(concat)




//  ----------------- split -----------------
// To seperate the each letter

let splitArray = str.split(" ")

// console.log(splitArray)



//  ----------------- slice -----------------
// To seperate the string from position 3 to 6 from main string

let slice = str.slice(3, 6)
// console.log(slice)


// ----------------- substring -----------------
// To start the the string from 3rd position.

let substring = str.substring(3)
// console.log(substring)


// ----------------- Upper and lower case -----------------
// To change the case of text.

let upper = str.toUpperCase()
let lower = str.toLowerCase()
// console.log(upper)
// console.log(lower)

// ------------------ Replace ----------------------
//  To replace the letter or word

let replace = str2.replace("software" , "Mechanical")
// console.log(replace)

