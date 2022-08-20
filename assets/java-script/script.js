var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }

  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}
function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  var userInput = window.prompt("How long do you want password to be?");

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("That's not a number!");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length mus be between 8 and 128 characters");
    return;
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers?");

  var userWantsSymbols = window.confirm("Would you like to include symbols?");

  var userWantsLowercase = window.confirm(
    "Would you like to include lowercase letters?"
  );

  var userWantsUppercase = window.confirm(
    "Would you like to include uppercase letters?"
  );

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var lowerCaselist = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercaseList = [];

  var cart = [];

  for (var i = 0; i < lowerCaselist.length; i++) {
    uppercaseList[i] = lowerCaselist[i].toUpperCase();
  }

  if (userWantsNumbers === true) {
    cart.push(numberList);
  }
  if (userWantsSymbols === true) {
    cart.push(symbolList);
  }
  if (userWantsLowercase === true) {
    cart.push(lowerCaselist);
  }
  if (userWantsUppercase === true) {
    cart.push(uppercaseList);
  }
  if (cart.length === 0) {
    cart.push(lowerCaselist);
  }

  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(cart);
    var randomChar = getRandomItem(randomList);
    generatedPassword += randomChar;
  }
  return generatedPassword;
}
// Write password to the#password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
