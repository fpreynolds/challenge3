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
// ask user if they want to use uppercase letters
  var uppercaseChoice = window.confirm("Would you like to use uppercase letters?");

  if (uppercaseChoice) {
    gen += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(gen);
  }
// ask the user if they want to use numbers
  var numbersChoice = window.confirm("Would you like to use numbers?");

  if (numbersChoice) {
    gen += "0123456789";
    console.log(gen);
  }
// ask the user if they want to use special characters
  var specialChoice = window.confirm("Would you like to use special characters?");

  if (numbersChoice) {
    gen += "!#$%^&*()_-=+:;,.<>/?`~|";
    console.log(gen);
  }
// ask the user how long their password should be
  var lengthChoice = window.prompt("how long should your password be? choose a value from 8 to 128");
  console.log(lengthChoice);
// confirm all choices made by user
  var confirmChoice = window.confirm("Here is your character pool: " + gen + "  Your password will be " + lengthChoice + " characters long. Is this correct?");
  // resets gen and lengthChoice variables if user chooses to start over, clears previous choices added to gen
  if (!confirmChoice) {
    gen = "";
    lengthChoice = ""
    writePassword();
  }

// generates password based on all choices applied to gen and lengthChoice variables
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
