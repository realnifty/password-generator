var charTypeSelect = [];

function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function randomSpecialChar() {
  var specialChars = " !#$%&'()*+,-./:;<=>?@[]\\^_`{|}~\" ";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
};

function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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
};

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

function verifyCharTypeSelect() {
  charTypeSelect.push(passLength(), lowercasePrompt(), uppercasePrompt(), numberPrompt(), specialCharPrompt());
  for (var i = 1; i < charTypeSelect.length; i++) {
    if (charTypeSelect[i]) {
      return true;
    }
  }
  window.alert("You must select at least one character type.");
  verifyCharTypeSelect();
}

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
