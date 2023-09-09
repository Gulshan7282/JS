const accountId = 154785486
let accountEmail = "abcdfghijkl@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let  accountState;

// accountId = 1577957  // not alloed

accountEmail = "hindi@gmail.com"
accountPassword = "456123"
accountCity = "Kolkata"

console.log(accountId);

/*
Prefer not to use  var
because of issuse in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])