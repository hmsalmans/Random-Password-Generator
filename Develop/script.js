

let characters = prompt("Please chose between 8 and 128 characters for your passward")
  if (characters >= 8 && characters <= 128) {
    alert(characters + " characters chosen.")
  }
    else {
      alert("Sorry! Criteria is not met. Restart the application if still interested. BYE")
      exit; // Application will close if criteria is not met.
}

var mene = ""; // varaiables are set to follow through the steps and store new value every time user reponds to next prompt.
var suerpStr = "";
var count = 0;


let CapLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let caps = confirm("Would you like capital letters in your passward?")
if (caps) {
  var cAPT = (CapLetter.charAt(Math.floor(Math.random() * 26)))
  suerpStr = suerpStr + CapLetter;
  mene = mene + cAPT; // This is making sure to include at least one character in the new value of suerpStr, if conditiones are met.
  count++; // count++ is making sure we add one to new var = mene value which we will need to subtract in the end when we run our loop for desired characters by user.
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
  count++

}

if (!numb && !caps && !spac && !smas)  {
  alert("Sorry You did not chose any of the characters. BYE");
  exit; // Aplication will alert user and close if user doesn't select any of the characters.
}

alert("Click on the purple button to receive your password")

var charLength = characters; 

for (var j = 0; j < charLength-count; j++) {
  var randomChar = suerpStr.charAt(Math.floor(Math.random()*suerpStr.length));
  mene = mene + randomChar;
}
// Function is created to return passward

function generatePassword() {
 
  return (mene + "\n \n I know you like the new password :) \n Try not to memorize it Okay!");
}

var generateBtn = document.querySelector("#generate");



// Added event listener to generate button
generateBtn.addEventListener("click", writePassword, );


// Password to the #password input
function writePassword() {
  var password = generatePassword()
  var ext = document.querySelector("#password");

  ext.value = password;

}
    