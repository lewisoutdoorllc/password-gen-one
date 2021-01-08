// button fuction to prompt generate new password upon click //
var generateButton = document.getElementById('generateNewPassword');
generateButton.addEventListener('click', function() {
  generateNewPassword();
});
// first prompt to get input for password lenght and limits are set to no less than 8 and no more than 128 //
function generateNewPassword() {
  var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

// confirm prompts for user to choose what inputs they would like included in there password //
var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

// if user does not choose any avalible inputs it will return for them to select at least one //
while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}


  var password = "";
// this uses the random generator js file that is attacted thru html and is part of this repo so as to have no external link issues or code breaks // 
  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");
// this will put out a ramdom password dependent on user choices //
  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}