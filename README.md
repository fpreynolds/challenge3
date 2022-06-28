# challenge3
Week 3 Javascript Challenge
<!-- delete all this later -->
the idea here is ill start with my gen variable empty, each time the user elects to use a specific kind of character that array will be added to the end of the gen array. once the user has selected all the chosen character types the script will ask the user how many characters to write, and once they hit generate it will generate a password of the given length with the given characters
<!-- TODO -->
<!-- define variable for the string the user is pulling from to gen their pass, called generator string in this readme -->
<!-- define variable string for uppercase letters -->
<!-- define variable string for lowercase letters -->
<!-- define variable string for numbers -->
<!-- define variable string for special characters -->
<!-- ask the user via alert box if they want to use uppercase letters -->
<!-- if yes, add uppercase string to generator string -->
<!-- ask user if they want to use lowercase letters -->
<!-- if yes add lowercase string to gen array -->
<!-- ask user if they want to use numbers -->
<!-- if yes add number string to gen string -->
<!-- ask user if they want to use special characters -->
<!-- if yes add special character string to gen pass -->
<!-- once they choose all the character types they want, ask them how long the password should be -->
<!-- generate password based on gen string -->

<!-- this is a snippet i found on stack.overflow that ought to be very useful -->

<!-- 
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));
 -->