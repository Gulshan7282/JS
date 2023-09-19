const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(4));

const hunders = 10000000
// console.log(hunders.toLocaleString('en-IN'));


///+++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.abs(5));
// console.log(Math.round(4.356));
// console.log(Math.ceil(4.356));
// console.log(Math.floor(4.356));

console.log(Math.random());  // math.randoem() 0(zero) or 1 ke middle hi value date hai
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min + 1)) + min);