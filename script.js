// Assignment Code

// all potential password charecters
var UserEnter = "";
var confirmNumber = [1,2,3,4,5,6,7,8,9,];
var confirmCharacter = ["!","@","#","$","%","^","&","*","(",")","_","+","=","-","[","]"];
var confirmUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var confirmlowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var generateBtn = document.querySelector("#generate");

var PossibleCombos;

function generatePassword(){
  // confirm("You will be asked a series of possible password option, <br> click ok to continue");
  UserEnter = parseInt(prompt('How many Charecters Would You Like In Your Randomly Generated Password? /break Password Must Be Between 8 - 128 Charecters Long!'));

  if (!UserEnter){
    alert("this needs user input");
  } else if (UserEnter < 8 || UserEnter > 128) {
    UserEnter = parseInt(prompt("You Must Choose between 8 and 128 Charecters"));
  }else {
    confirmNumber = confirm('Will The Password Contain Numbers?');
    confirmUppercase = confirm('Will The Password Contain Upper Case Letters?' );
    confirmlowercase = confirm('Will The Password Contain Lower Case Letters?' );
    confirmCharacter = confirm( 'Will The Password Contain Special Charecters?');
  };
};




// Write password to the #password input
function writePassword() {






  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
