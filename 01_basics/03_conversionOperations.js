// // let Score = "33aa"
// // let Score = null
// // let Score = undefined
// // let Score = true
// let Score = "Gulshan"

// console.log(typeof Score);
// console.log(typeof (Score));

// let valueInNumber = Number(Score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//NOTES
// "33" => 33
// "33aa" => NaN
// true => 1; false => 0




// // let isLoggedIn = 1
// // let isLoggedIn = ""
// let isLoggedIn = "Gulshan"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); 

// //NOTE
// // 1 => true;   0 => false
// // "" => false
// // "Gulshan" => true



// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);






/***********************************OPERATIONS*****************************/

// let value = 3
// let negValue = -value
// // console.log(negValue);

// // console.log(2+2); // 4
// // console.log(2-2); // 0
// // console.log(2*2); // 4
// // console.log(2**2); // 4
// // console.log(2/2); // 1
// // console.log(2%2); // 0




let str1 = "hello"
let str2 = " India"
let str3 = str1 + str2
console.log(str3); 

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")
// NOTES
// -->the abstract operations To Primitive takes argument input and operatinal argument preferred Types(string or number)
//     and return either a normal completion conating an ECMAScript language  value or a throw completion.
 
console.log(true);  //true
console.log(+true); // 1
// console.log(true+); // error
console.log(+""); // 0

let num1 , num2, num3
num1 = num2 = num3 = 4+4 // not good readibality, do not write this type of code in any where 

let gameCounter = 100
gameCounter ++;
console.log(gameCounter);