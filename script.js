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

var password = ""

function generatePassword () {
 var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 var numerals = [1,2,3,4,5,6,7,8,9,0];
 var specials = ["!","?","#","$","&","^","/","%"];

 //if functions confirmed look at related array and pull 
 if (upperCharas) {

 }
  
  
  
  
  
  
  
  
  passwordLength()
  if (upperCharas === false && lowerCharas === false && numeric === false && special === false) {
    window.alert ("Your password cannot be generated. Try again.");
  }

//function for password length
  function passwordLength () {
  var passLength = window.prompt("Enter desired password length between 8 and 128 characters.");
  if (passLength < 8 || passLength > 128 || passLength === "" || passLength === null) {
    window.alert("Please choose a valid length.");
    passwordLength();
  } else
    console.log(passLength);
    upperCharas();
}

//function to include uppercase characters
function upperCharas () {
  var uppercase = window.confirm ("Include upper case characters?");
  if (uppercase) {
    console.log("include uppercase characters");
    lowerCharas();
  } else {
    console.log("no uppercase characters");
    lowerCharas();
  }
}

//function to include lowercase characters
function lowerCharas () {
  var lowercase = window.confirm ("Include lower case characters?");
  if (lowercase) {
    console.log("include lowercase characters");
    numeric();
  } else {
    console.log("no lower case characters");
    numeric();
  }
}

//function to include numbers
function numeric () {
  var numbers = window.confirm ("Include numbers?");
  if (numbers) {
    console.log("include numbers");
    special();
  } else {
    console.log("no numbers");
    special();
  }
}

//function to include special characters
function special () {
  var specialCharas = window.confirm ("Include special characters?");
  if (specialCharas) {
    console.log("include special characters");
  } else {
    console.log("no special characters");
  }
}
}


