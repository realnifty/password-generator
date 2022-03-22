// this variable is an empty array for criteria to be pushed into to later verify if they are true or false.
var charTypeSelect = [];

// this function returns a string of lowercase characters created randomly from the specified sequence of UTF-16 code units.
function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// this function returns a string of uppercase characters created randomly from the specified sequence of UTF-16 code units.
function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// this function returns a string of numbers created randomly from the specified sequence of UTF-16 code units.
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// this function declares a variable with a string containing special characters/symbols and returns a random symbol based on the character length of the string.
function randomSpecialChar() {
  var specialChars = " !#$%&'()*+,-./:;<=>?@[]\\^_`{|}~\" ";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
};

// standard random number generator function which will return a random integer between a specified min and max number inclusive.
function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// this function executes a prompt for verifying a specific criterion special characters and returns a value of true or false depending on the input.
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
};

// this function executes a prompt for verifying a specific criterion numbers and returns a value of true or false depending on the input.
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
};

// this function executes a prompt for verifying a specific criterion uppercase characters and returns a value of true or false depending on the input.
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
};

// this function executes a prompt for verifying a specific criterion lowercase characters and returns a value of true or false depending on the input.
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
};

// this function executes a prompt for verifying a specific criterion password length and returns a value of true or invalid = recursive function call depending on the input.
function passLength() {
  passLengthVal = window.prompt("Choose a password length between 8 - 128 characters.");
  if (passLengthVal >= 8 && passLengthVal <= 128) {
    window.alert("Your password will be " + passLengthVal + " characters long.");
    return true;
  } 
  else {
    window.alert("Please enter a valid password length.");
    passLength();
  }
};

/* this function pushes the criteria prompt functions into the empty array at the top of the file to verify their value as true. 
the for loop index starts at 1, since the passLength(); function is inherently true regardless of input. */
function verifyCharTypeSelect() {
  charTypeSelect.push(passLength(), lowercasePrompt(), uppercasePrompt(), numberPrompt(), specialCharPrompt());
  for (var i = 1; i < charTypeSelect.length; i++) {
    if (charTypeSelect[i]) {
      return true;
    }
  }
  // if none of the array items have a a value of true, the function is recursively called until at least one character type is chosen.
  window.alert("You must select at least one character type.");
  verifyCharTypeSelect();
}

/* this function generates the password from a set of given criteria defined in the charTypeSelect array in the above function.
a variable finalPassword is declared as an empty string. the while loop condition is that so long as the length of finalPassword is less than the preferred
password length given by user input in the passLength prompt, the function will cycle through the index of array charTypeSelect and append a randomly
generated character according to its parent criterion to the empty string value of finalPassword */
function generatePassword(){
  verifyCharTypeSelect();
  var finalPassword = "";
  while (finalPassword.length < passLengthVal) {
    if (charTypeSelect[1] === true) {
      finalPassword += randomLowercase();
    }
    if (charTypeSelect[2] === true) {
      finalPassword += randomUppercase();
    }
    if (charTypeSelect[3] === true) {
      finalPassword += randomNumber();
    }
    if (charTypeSelect[4] === true) {
      finalPassword += randomSpecialChar();
    }
    var randomCharType = rng(1,4);
    if (randomCharType === 1 && charTypeSelect[1] === true) {
      finalPassword += randomLowercase();
    }
    else if (randomCharType === 2 && charTypeSelect[2] === true) {
      finalPassword += randomUppercase();
    }
    else if (randomCharType === 3 && charTypeSelect[3] === true) {
      finalPassword += randomNumber();
    }
    else if (randomCharType === 4 && charTypeSelect[4] === true) {
      finalPassword += randomSpecialChar();
    }
    else {
      finalPassword += "";
    }
  }
  return finalPassword;
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
