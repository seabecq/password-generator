// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword () {
  var passLength = window.prompt("Enter desired password length between 8 and 128 characters.")
  if (passLength < 8 || passLength > 128 || passLength === "" || passLength === null) {
    window.alert("Please choose a valid length.")
    writePassword();
  } else
    console.log(passLength)
    upperCharas();
}

function upperCharas () {
  var uppercase = window.confirm ("Include upper case characters?")
  if (uppercase) {
    console.log("include uppercase characters")
    lowerCharas();
  } else {
    console.log("no uppercase characters")
    lowerCharas ();
  }
}

function lowerCharas () {
  var lowercase = window.confirm ("Include lower case characters?")
  if (lowercase) {
    console.log("include lowercase characters")
    numeric ();
  } else {
    console.log("no lower case characters")
    numberic ();
  }
}

function numeric () {
  var numbers = window.confirm ("Include numbers?")
  if (numbers) {
    console.log("include numbers")
    special ();
  } else {
    console.log("no numbers")
    special ();
  }
}

function special () {
  var specialCharas = window.confirm ("Include special characters?")
  if (specialCharas) {
    console.log("include special characters")
  } else {
    console.log("no special characters")
  }
}