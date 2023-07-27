// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', "[", '\\', "]", '^', "_", '`', '{', '|', '}', '~']
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let builtArray = [];

// function for generating password
function generatePassword() {
  //Build array based off user selection
  if (confirm("Do you want the password to contain lowercase letters?")) {
    builtArray = [...builtArray, ...lowerAlphabet]
  }
  if (confirm("Do you want the password to contain uppercase letters?")) {
    builtArray = [...builtArray, ...upperAlphabet]
  }
  if (confirm("Do you want the password to contain numbers?")) {
    builtArray = [...builtArray, ...numbers]
  }
  if (confirm("Do you want the password to contain special characters?")) {
    builtArray - [...builtArray, ...specialCharacters]
  }

  password = "";
  //Prompt for password length and implementation of random char. selector
  let passwordLength = prompt("How long do you want the password?")
  for (let i = 0; i < passwordLength; i++) {
    let randomCharacter = builtArray[Math.floor(builtArray.length * Math.random())];
    password += randomCharacter;
  }
  //Display Password
  return password;
}
//function that executes when generate button is clicked
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);