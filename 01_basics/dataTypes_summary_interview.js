//  Primitive Datatypes

//  7 Types : String, Number, Boolean, Null, Undefine, Symbol, BigInt
// JavaScript is dynamically Type language. which means that dataypes of variable are determined by the value they hold at runtime and can change throughout the program as we assing different value to them

const score = 100
const scoreValue = 100.35

const isLogged = false
const outsideTemp = null

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const binNumber = 54521548154814n










// Reference (Non Primitive) 

// Array, Objects, Functions

const heros = ["shaktiman", " naagraj", "Hannuman"] // Arrays declear

let myObj = {
    name : "Gulshan", 
    age : 20
} // Object declear

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof outsideTemp); 
console.log(typeof binNumber);
console.log(typeof scoreValue);

console.log(typeof myFunction);
console.log(typeof myObj);

