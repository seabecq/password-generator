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
}
