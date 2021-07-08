// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var options = [];

  var upperCase="ABCDEFGHIJKLMNOPRQSTUVWXYZ".split("")
  var lowerCase="abcdefghijklmnopqrstuvwxyz".split("")
  var numbers="1234567890".split("")
  var symbols="!@#%^&*()?/".split("")
  var characters = prompt ("How many characters do you want?");
  var wantsuppercase= confirm ("Do you want upper case letters?")
  var wantslowercase=confirm ("Do you want lower case letters?")
  var wantsnumbers=confirm ("Do you want numbers?")
  var wantssymbols=confirm ("Do you want symbols?")

  var index = Math.floor(Math.random() * options.length);
  

if (characters<8||characters>128){
    // if characters less than 128, move to next prompt
    alert ("password must contain atleast 8 characters.");
  }
if (wantsuppercase){
  index=options.concat(upperCase);
  return;
}
if (wantslowercase){
  options=options.concat(uppercase,lowerCase);
  return;
}
if (wantsnumbers){
  options=options.concat(uppercase,lowercase,numbers);
  return;
}
if (wantssymbols){
  options=options.concat(uppercase,lowercase,numbers,symbols);
  return;
}
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);