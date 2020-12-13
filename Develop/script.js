// listing potential variables
var enter;
// all potential password charecters
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmlowercase;

// Assignment Code
var generateBtn = document.querySelector("#generate");
var 

// Write password to the #password input
function writePassword() {

  writePassword = parseInt(prompt("How many charecters would you like your random password to contain"));
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
