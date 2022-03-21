// Assignment Code
var randomChar = {
  lowercase: randomLowercase,
  uppercase: randomUppercase,
  number: randomNumber,
  specialcharacter: randomSpecialChar,
};

// criteria randomizer functions

function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecialChar() {
  var specialChars = " !#$%&'()*+,-./:;<=>?@[]\\^_`{|}~\" ";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}

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
  } 
  else {
    window.alert("Please enter a valid password length.");
    passLength();
  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  console.log("Generate Password button clicked.");
  passLength();
  lowercasePrompt();
  uppercasePrompt();
  numberPrompt();
  specialCharPrompt();
};



