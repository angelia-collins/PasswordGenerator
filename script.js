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

  var demChar = [];

  var invalid = true;

  var userNum = prompt("How many characters do you need? Pick between 8 and 128 characters.");
  while (invalid) {
    if (userNum === null) {
      return "";
    }
    else {
      userNum = Number(userNum);
    }
    //Did they put a number? And is it in range?
      if (Number.isInteger(userNum)) {
        if (userNum >= 8 && userNum <= 128) {
          invalid = false;
        }
        else {
          userNum = prompt("Only numbers between 8 and 128 please. How many characters do you need?");
        }
      } 
    //Put a number fool.
    else {
      userNum = prompt("Only whole numbers please. How many characters do you need? Pick between 8 and 128 characters.");
    }
  }

  var lowers = confirm("Do you want lowercase letters?");
  if (lowers) {
    demChar = demChar.concat(Arr_lowCase);
  }
  var uppers = confirm("Do you want uppercase letters?");
  if (uppers) {
    demChar = demChar.concat(Arr_capitalLetters);
  }
  var num = confirm("Do you want numbers?");
  if (num) {
    demChar = demChar.concat(Arr_numOptions);
  }
  var special = confirm("Do you want special characters?");
  if (special) {
    demChar = demChar.concat(Arr_specChar);
  }
  var answer = [];

  for (var i = 0; i < userNum; i++) {
    var randomIndex = Math.floor(Math.random() * demChar.length);
    answer.push(demChar[randomIndex]);
  }
  return answer.join('');

};