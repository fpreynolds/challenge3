// Assignment Code
var generateBtn = document.querySelector("#generate");
var gen = ""
var password = ""
var lengthChoice = 0
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
  function lengCho() {  
 lengthChoice = window.prompt("how long should your password be? choose a value from 8 to 128");
 console.log(parseInt(lengthChoice));
 if (!parseInt(lengthChoice)) {
  window.alert("You must choose a NUMBER")
 lengCho();
} 
 if (lengthChoice > 128) {
      window.alert("Password must be between 8 and 128 characters long!");
      lengCho()
    }
    if (lengthChoice < 8) {
      window.alert("Password must be between 8 and 128 characters long!");
      lengCho()
    }
  } lengCho();
  // todo
  // make sure user input is both a number and also within the number of characters


  // confirm all choices made by user
  var confirmChoice = window.confirm("Here is your character pool: " + gen + "  Your password will be " + lengthChoice + " characters long. Is this correct?");
  // resets gen and lengthChoice variables if user chooses to start over, clears previous choices added to gen
  if (!confirmChoice) {
    gen = "";
    lengthChoice = ""
    writePassword();
  } else {
    password = generatePassword();
  }

  // generates password based on all choices applied to gen and lengthChoice variables
  function generatePassword() {
    console.log("we are here");
    var result = "";
    var genLength = gen.length;
    for (var i = 0; i < lengthChoice; i++) {
      result += gen.charAt(Math.floor(Math.random() * genLength));
    }
    return result;
  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  gen = "";
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
