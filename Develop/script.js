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
  var uppers = confirm("Would you like to use uppercase letters?");
  var lowers = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");
  
  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  }
  passwordText.value = password;

}var allowed = {};
if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
if (numbers) password += rando(allowed.numbers = "1234567890");
if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

document.getElementById("password").value = randoSequence(password).join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);