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
  passwordLength()
  if (upperCharas === false && lowerCharas === false && numeric === false && special === false) {
    window.alert ("Your password cannot be generated. Try again.")
  }

//function for password length
  function passwordLength () {
  var passLength = window.prompt("Enter desired password length between 8 and 128 characters.")
  if (passLength < 8 || passLength > 128 || passLength === "" || passLength === null) {
    window.alert("Please choose a valid length.")
    writePassword();
  } else
    console.log(passLength)
    upperCharas();
}

//function to include uppercase characters
function upperCharas () {
  var uppercase = window.confirm ("Include upper case characters?")
  if (uppercase) {
    console.log("include uppercase characters")
    upperCharas = true
    lowerCharas();
  } else {
    console.log("no uppercase characters")
    lowerCharas ();
    upperCharas = false
  }
}

//function to include lowercase characters
function lowerCharas () {
  var lowercase = window.confirm ("Include lower case characters?")
  if (lowercase) {
    console.log("include lowercase characters")
    lowerCharas = true
    numeric ();
  } else {
    console.log("no lower case characters")
    numeric ();
    lowerCharas = false
  }
}

//function to include numbers
function numeric () {
  var numbers = window.confirm ("Include numbers?")
  if (numbers) {
    console.log("include numbers")
    numeric = true
    special ();
  } else {
    console.log("no numbers")
    special ();
    numeric = false
  }
}

//function to include special characters
function special () {
  var specialCharas = window.confirm ("Include special characters?")
  if (specialCharas) {
    console.log("include special characters")
    special = true
  } else {
    console.log("no special characters")
    special = false
  }
}
}

