const arr = [1, 2, 3, "Gulshan", true, 2.5551]
const myheros = ["Ram", "Sita"]

const myArr = new Array(1, 2, 3, 4, 5, 6)

// console.log(arr[0]);


//Arrays method

// myArr.push(7)
// myArr.push(8)
// console.log(myArr);
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(78));

// const newArr = myArr.join()
// console.log(myArr);
// console.log( newArr );
// console.log(typeof newArr );


//slice, splice 

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C",myArr);
console.log(myn2);