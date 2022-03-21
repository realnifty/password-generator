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
};



// prompt ask password length (8-128 characters)
// prompt ask password character type (lowercase, uppercase, numeric, and special characters)