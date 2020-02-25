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



let CapLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let caps = confirm("Would you like capital letters in your passward?")
if (caps){
  var cAPT = (CapLetter.charAt(Math.floor(Math.random() * 26)))
}



let smaLetter = "abcdefghijklmnopqrstuvwxyz"
let smas = confirm("Would you like small letters in your passward?")
if (smas){
   var sAML = (smaLetter.charAt(Math.floor(Math.random() * 26)))
}





let speLetter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
let spac = confirm("Would you like any special characters in your passward?")
if (spac){
var sPEL = (speLetter.charAt(Math.floor(Math.random() * 31)))
}




let numbers = "1234567890"
let numb = confirm("Would you like any numbers in your passward?")
if (numb){
var nUMB = (numbers.charAt(Math.floor(Math.random() * 10)))
}






if (!caps && !smas && !spac  && !numb)
alert("You did not chose any value")

else if (caps && smas && spac  && numb) {
  choice = cAPT.concat(sAML, sPEL, nUMB)
}
else if (caps && smas && spac) {
  choice = cAPT.concat(sAML, sPEL)
}


else if (caps && smas && numb) {
  choice = cAPT.concat(sAML, nUMB)
}

else if (caps && numb && spac) {
  choice = cAPT.concat(nUMB, sPEL)
}

else if (numb && smas && spac) {
  choice = nUMB.concat(sAML, sPEL)
}


else if (caps && smas) {
  choice = cAPT.concat(sAML)
}

else if (caps && spac) {
  choice = cAPT.concat(sPEL)
}

else if (caps && numb) {
  choice = cAPT.concat(nUMB)
}

else if (spac && smas) {
  choice = sPEL.concat(sAML)
}

else if (numb && smas) {
  choice = nUMB.concat(sAML)
}

else if (numb && spac) {
  choice = nUMB.concat(sPEL)
}


else if (numb) {
  choice = nUMB
}


else if (spac) {
  choice = sPEL
}

else if (smas) {
  choice = sAML
}

else if (caps) {
  choice = cAPT
};




















