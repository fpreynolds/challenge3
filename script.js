// Assignment Code
var generateBtn = document.querySelector("#generate");
var gen = ""

// Write password to the #password input
function writePassword() {
  // ask user if they want to use lowercase letters
  var lowercaseChoice = window.confirm("Would you like to use lowercase letters?");

  if (lowercaseChoice) {
    gen += "abcdefghijklmnopqrstuvwxyz";
    console.log(gen);
  }

  var uppercaseChoice = window.confirm("Would you like to use uppercase letters?");

  if (uppercaseChoice) {
    gen += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(gen);
  }

  var numbersChoice = window.confirm("Would you like to use numbers?");

  if (numbersChoice) {
    gen += "0123456789";
    console.log(gen);
  }

  var specialChoice = window.confirm("Would you like to use special characters?");

  if (numbersChoice) {
    gen += "!#$%^&*()_-=+:;,.<>/?`~|";
    console.log(gen);
  }

  var lengthChoice = window.prompt("how long should your password be? choose a value from 8 to 128");
  console.log(lengthChoice);

  var confirmChoice = window.confirm("Here is your character pool: " + gen + "  Your password will be " + lengthChoice + " characters long. Is this correct?");
  
  if (!confirmChoice) {
    gen = "";
    lengthChoice = ""
    writePassword();
  }


  var password = generatePassword();
  function generatePassword() {
    var result = "";
    var genLength = gen.length;
    for ( var i = 0; i < lengthChoice; i++ ) {
      result += gen.charAt(Math.floor(Math.random() * genLength));
    }
    return result;
  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
