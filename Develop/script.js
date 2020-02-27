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

    

let characters = prompt("Please chose between 8 and 128 characters for your passward")
  if (characters >= 8 && characters <= 128) {
    alert(characters + " Characters chosen.")
  }
    else {
      alert("Sorry! Criteria is not met.")
}

var mene = "";
var suerpStr = "";
var count = 0;

let CapLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let caps = confirm("Would you like capital letters in your passward?")
if (caps) {
  var cAPT = (CapLetter.charAt(Math.floor(Math.random() * 26)))
  suerpStr = suerpStr + CapLetter;
  mene = mene + cAPT;
  count++;
}



let smaLetter = "abcdefghijklmnopqrstuvwxyz"
let smas = confirm("Would you like small letters in your passward?")
if (smas){
   var sAML = (smaLetter.charAt(Math.floor(Math.random() * 26)))
suerpStr = suerpStr + smaLetter; 
mene = mene + sAML
count++
}





let speLetter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
let spac = confirm("Would you like any special characters in your passward?")
if (spac){
var sPEL = (speLetter.charAt(Math.floor(Math.random() * 31)))
suerpStr = suerpStr + speLetter
mene = mene + sPEL
count++
}




let numbers = "1234567890"
let numb = confirm("Would you like any numbers in your passward?")
if (numb){
var nUMB = (numbers.charAt(Math.floor(Math.random() * 10)))
  suerpStr = suerpStr + numbers
  mene = mene + nUMB;
  count++;

}

var charLength = parseInt(characters);

for (var j = 0; j < charLength-count; j++) {
  var randomChar = suerpStr.charAt(Math.floor(Math.random()*suerpStr.length));
  mene = mene + randomChar;
}

alert(mene);
