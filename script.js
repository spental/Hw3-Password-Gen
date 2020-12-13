// Assignment Code

// all potential password charecters

var number = [1,2,3,4,5,6,7,8,9];
var character = ["!","@","#","$","%","^","&","*","(",")","_","+","=","-","[","]"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var generateBtn = document.querySelector("#generate");
var PossibleCombos = []

// starting the generate password procces

function generatePassword(){

  // confirm("You will be asked a series of possible password option, <br> click ok to continue");

  passwordlength = parseInt(prompt('How many Charecters Would You Like In Your Randomly Generated Password? \n Password Must Be Between 8 - 128 Charecters Long!'));
// if declared as false then alert with be issued. 

  if (!passwordlength){

    alert("this needs user input");
    return;

  } else if (passwordlength < 8 || passwordlength > 128) {
    passwordlength = parseInt(alert("You Must Choose between 8 and 128 Charecters"));
    return;
  }

// Questions to promp user for info 
    var confirmNumber = confirm('Will The Password Contain Numbers?');
    var confirmUppercase = confirm('Will The Password Contain Upper Case Letters?' );
    var confirmlowercase = confirm('Will The Password Contain Lower Case Letters?' );
    var confirmCharacter = confirm( 'Will The Password Contain Special Charecters?');
  

if (!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmlowercase){
  alert("You Must Choose a criteria!");
  return;
}

if (confirmNumber){
   PossibleCombos = PossibleCombos.concat(number)
} 


};

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
