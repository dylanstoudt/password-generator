// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let builtArray = []

// Write password to the #password input
function generatePassword() {
  //Build array based off user selection
  if (confirm("Do you want the password to contain lowercase letters?")) {
    builtArray = [...builtArray, ...lowerAlphabet]
  }
  if (confirm("Do you want the password to contain uppercase letters?")) {
    builtArray = [...builtArray, ...upperAlphabet]
  }
  if (confirm("Do you want the password to contain numbers?")){
    builtArray = [...builtArray, ...numbers]
  }
  //Defines password
  let password = "";
  //Prompt for password length and implementation of random char. selector
  let passwordLength = prompt("How long do you want the password?")
  for (let i = 0; i < passwordLength; i++) {
    let randomCharacter = builtArray[Math.floor(password.Length * Math.random())];
    password += randomCharacter;
  }
  //Display Password
  return password;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
