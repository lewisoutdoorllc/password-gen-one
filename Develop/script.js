// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generateButton = document.getElementById('generateNewPassword');
generateButton.addEventListener('click', function() {
  generateNewPassword();
});

function generateNewPassword() {
  var length = Number(prompt("How many characters would you like your password to be?"));
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);