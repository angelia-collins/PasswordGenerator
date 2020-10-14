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
generateBtn.onclick = function(){

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

    // if (confirm("How many characters do you need?")) {
    //   txt = "You pressed OK!";
    // } else {
    //   txt = "You pressed Cancel!";
    // }

};