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
  if  (characters >= 8 && characters <= 128) {
    alert(characters + " Characters chosen.")
  }
    else {
      alert("Sorry! Criteria is not met.")

  }
let CapLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let caps = confirm("Would you like capital letters in your passward?")
if (caps){
  var cAPT = (CapLetter.charAt(Math.floor(Math.random() * 26)))
}
else {
  alert("Ok! Bye then.")
}


let smaLetter = "abcdefghijklmnopqrstuvwxyz"
let smas = confirm("Would you like small letters in your passward?")
if (smas){
   alert (smaLetter.charAt(Math.floor(Math.random() * 26)))
}
else {
  alert("Ok! Bye then.")
}




let smaLetter = "abcdefghijklmnopqrstuvwxyz"
let smas = confirm("Would you like small letters in your passward?")
if (smas){
   alert (smaLetter.charAt(Math.floor(Math.random() * 26)))
}
else {
  alert("Ok! Bye then.")
}



















!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"