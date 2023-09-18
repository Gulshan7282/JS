const name = "Gulshan"
const lastName = "Kumar"

// console.log(name + lastName + "Developer"); // (Not Use for this types of adding with two or more String)


//  Use for adding String using moden technique is called "String InterPolation". like this.......
console.log(`My name is ${name} and last name is ${lastName}`);


//  String declear in object form like this..
const gameName = new String('Circket')
const game = new String('Circket-Football-kabbadi')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));
console.log(typeof gameName);

const newString = gameName.substring(0,4)
console.log(newString);

const anotherNewString = gameName.slice(-8, 4)
console.log(anotherNewString);

const newStringOne = "      I Live in India     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://javatpoint/Javascript%20notes"
console.log(url.replace('%20', "-"));
console.log(url.includes('Javascript'));
console.log(url.includes('python'));

console.log(game.split('-'));