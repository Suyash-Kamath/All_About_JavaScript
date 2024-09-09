const accountId = 144553;
let accountEmail = "suyash@gmail.com"
var accountPassword = "12345"

accountCity = "Mumbai" //As JavaScript is safe ,you can reserve memory without writing anything but a bad practice
let accountState;
// accountId = 2; not allowed to change
accountEmail = "s@gmail.com"
accountPassword = "928"
accountCity="Bengaluru"
console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity])

/*

Prefer not to use var because of issue in Block scope and functional Scope

 */

console.log(accountState);

