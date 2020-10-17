var Arr_lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Arr_capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Arr_specChar = [" ", "!", "#", "$", "%", "&", "\"", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
var Arr_numOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


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


//When user clicks make a prompt
function generatePassword() {

  if (prompt("How many characters do you need? Pick between 8 and 128 characters.")) {

  } else {
    return Math.floor(Math.random() * Math.floor(max));
  }

  if (confirm("Do you want lowercase letters?")) {

  }

  if (confirm("Do you want uppercase letters?")) {

  }

  if (confirm("Do you want numbers?")) {

  }

  if (confirm("Do you want special characters?")) {

  }


};