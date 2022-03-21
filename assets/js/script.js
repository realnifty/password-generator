// Assignment Code
var lowerCase = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
var upperCase = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
var numbers = [...Array(10)].map((_, i) => String.fromCharCode(i + 48));
var specialChar = String.fromCharCode(33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,91,92,93,94,95,96,123,124,125,126);
var specialCharArr = [...specialChar]

console.log(lowerCase)
console.log(upperCase)
console.log(numbers)
console.log(specialCharArr)

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function specialCharPrompt() {
  var specialCharPromptConfirm = window.prompt("Include special characters? Enter 'yes' or 'no' to continue.");
  specialCharPromptConfirm = specialCharPromptConfirm.toLowerCase();
  if (specialCharPromptConfirm === "yes") {
    window.alert("Your password will contain special characters.");
    return true;
  }
  else if (specialCharPromptConfirm === "no") {
    window.alert("Your password will not contain special characters.");
    return false
  }
  else {
    window.alert("That was not a valid entry.");
    return specialCharPrompt();
  }
}

function numberPrompt() {
  var numberPromptConfirm = window.prompt("Include numbers? Enter 'yes' or 'no' to continue.");
  numberPromptConfirm = numberPromptConfirm.toLowerCase();
  if (numberPromptConfirm === "yes") {
    window.alert("Your password will contain numbers.");
    return true;
  }
  else if (numberPromptConfirm === "no") {
    window.alert("Your password will not contain numbers.");
    return false
  }
  else {
    window.alert("That was not a valid entry.");
    return numberPrompt();
  }
}

function uppercasePrompt() {
  var uppercasePromptConfirm = window.prompt("Include uppercase characters? Enter 'yes' or 'no' to continue.");
  uppercasePromptConfirm = uppercasePromptConfirm.toLowerCase();
  if (uppercasePromptConfirm === "yes") {
    window.alert("Your password will contain uppercase characters.");
    return true;
  }
  else if (uppercasePromptConfirm === "no") {
    window.alert("Your password will not contain uppercase characters.");
    return false
  }
  else {
    window.alert("That was not a valid entry.");
    return uppercasePrompt();
  }
}

function lowercasePrompt() {
  var lowercasePromptConfirm = window.prompt("Include lowercase characters? Enter 'yes' or 'no' to continue.");
  lowercasePromptConfirm = lowercasePromptConfirm.toLowerCase();
  if (lowercasePromptConfirm === "yes") {
    window.alert("Your password will contain lowercase characters.");
    return true;
  }
  else if (lowercasePromptConfirm === "no") {
    window.alert("Your password will not contain lowercase characters.");
    return false
  }
  else {
    window.alert("That was not a valid entry.");
    return lowercasePrompt();
  }
}

function passLength() {
  var passLengthVal = window.prompt("Choose a password length between 8 - 128 characters.");
  if (passLengthVal >= 8 && passLengthVal <= 128) {
    window.alert("Your password will be " + passLengthVal + " characters long.");
    return true;
  } else {
    window.alert("Please enter a valid password length.");
    passLength();
  }
}

function generatePassword () {
  console.log("Generate Password button clicked.");
  passLength();
  lowercasePrompt();
  uppercasePrompt();
  numberPrompt();
  specialCharPrompt();
};



// prompt ask password length (8-128 characters)
// prompt ask password character type (lowercase, uppercase, numeric, and special characters)