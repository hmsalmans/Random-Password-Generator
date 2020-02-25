// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let CapLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
alert(CapLetter.charAt(Math.floor(Math.random() * 26)))



!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"