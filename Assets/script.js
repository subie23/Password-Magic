// Assignment Code

// Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Variables for the criteria prompts
var yesNo = ["y", "n"]
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var optionsVariable ="";

// Event listener added to generate button
generateBtn.addEventListener("click", writePassword);

// Funtion to rite password 
function writePassword() {
  
  password.value === "";
  var randomString = "";

  // Prompts for choosing criteria
  var passwordLength = prompt("Choose a length for the password between 8 and 128 characters.");
  var lowercaseLetters = prompt("Would you like to include lowercase letters in your password?(y/n)");
  var uppercaseLetters = prompt("Would you like to include uppercase letters in your password?(y/n)");
  var numbers = prompt("Would you like to include numbers in your password?(y/n)");
  var specialChar = prompt("Would you like to include special characters in your password?(y/n)");

    // Alert to choose the correct character length
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Your password needs to be between 8 and 128 characters.");
      var passwordLength = prompt("Choose a length for the password between 8 and 128 characters.")
    }
    
    // Alert to choose 1 or more criteria
    if (lowercaseLetters=="n" & uppercaseLetters=="n" & numbers=="n" & specialChar=="n") {
      alert("Please choose at least one criteria for the password.");
      var lowercaseLetters = prompt("Would you like to include lowercase letters in your password?(y/n)");
      var uppercaseLetters = prompt("Would you like to include uppercase letters in your password?(y/n)");
      var numbers = prompt("Would you like to include numbers in your password?(y/n)");
      var specialChar = prompt("Would you like to include special characters in your password?(y/n)");

    }

    //Selected criteria return a random value
    if(lowercaseLetters=="y") {
      optionsVariable += lowercase;
    }

    if(uppercaseLetters=="y") {
      optionsVariable += uppercase;
    }

    if (numbers=="y") {
      optionsVariable += numeric;
    }

    if(specialChar=="y") {
      optionsVariable += specialCharacters;
    }

    for(var i = 0; i < passwordLength; i++) {
      randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value=randomString;

  }
   