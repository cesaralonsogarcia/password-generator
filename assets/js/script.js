// Arrays for password characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = [];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")",
"*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\",
"]", "^", "_", "`", "{", "|", "}", "~"];

// Use toUpperCase method to create the upperCase array
for (i = 0; i < lowerCase.length; i++) {
  upperCase[i] = lowerCase[i].toUpperCase();
}

// Function to generate password
function generatePassword() {
  // Prompt user for password length
  var passwordLength = window.prompt("Enter password length between 8 and 128 characters:");

  // Declare an empty password array to store all possible characters
  var passwordContainer = [];

  // Alert that input cannot be blank
  if (!passwordLength) {
    alert("You must input a value!");
    return generatePassword();
  }
  
  // Alert that input must be between 8 and 128
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You must choose a number between 8 and 128.");
    return generatePassword();
  }

  passwordContainer = checkCharacterTypes(passwordContainer);

  // String to hold the final password
  var finalPassword = "";
 
  for (i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * passwordContainer.length);
    finalPassword += passwordContainer[index];
  }

  return finalPassword;
}

// Function to check for character types
function checkCharacterTypes(passwordContainer) {
  // Prompt user for password characteristics, check selection and notify user
  var addLowerCase = window.confirm("Would you like to include lower case characters?");

  if (addLowerCase) {
    alert("Lower case added!");
    passwordContainer = passwordContainer.concat(lowerCase);
  } else {
    alert("Lower case NOT added!");
  }

  var addUpperCase = window.confirm("Would you like to include upper case characters?");
  if (addUpperCase) {
    alert("Upper case added!");
    passwordContainer = passwordContainer.concat(upperCase);
  } else {
    alert("Upper case NOT added!");
  }

  var addNumeric = window.confirm("Would you like to include numeric characters?");
  if (addNumeric) {
    alert("Numbers added!");
    passwordContainer = passwordContainer.concat(numeric);
  } else {
    alert("Numbers NOT added!");
  }

  var addSpecial = window.confirm("Would you like to include special characters?");
  if (addSpecial) {
    alert("Special characters added!");
    passwordContainer = passwordContainer.concat(specialCharacters);
  } else {
    alert("Special characters NOT added!");
  }

  // Check if none of the options were selected
  if (!addLowerCase && !addUpperCase && !addNumeric && !addSpecial) {
    alert("You must choose at least one of the options!");
    return checkCharacterTypes(passwordContainer);
  }
  else {
    return passwordContainer;
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
