// Arrays for password characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = [];
var numeric = [];
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")",
"*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\",
"]", "^", "_", "`", "{", "|", "}", "~"];

// Use toUpperCase method to create the upperCase array
for (i = 0; i < lowerCase.length; i++) {
  upperCase[i] = lowerCase[i].toUpperCase();
}

// Use for loop to create numeric array
for (i = 0; i < 10; i++) {
  numeric[i] = i;
  numeric[i].toString();
}

function generatePassword() {
  var passwordLength = window.prompt("Enter password length between 8 and 128 characters:");

  if (!passwordLength) {
    alert("You must input a value!");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You must choose a number between 8 and 128");
    return;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
