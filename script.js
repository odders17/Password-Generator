// Assignment Code
const characterAmountRange = document.getElementById
('characterAmountRange')
var characterAmountNumber = document.getElementById
('characterAmountNumber')
var includeUppercaseElement = document.getElementById
('includeUppercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var form = document.getElementById('passwordGeneratorForm')
var passwordDisplay= document.getElementById('passwordDisplay')

var lowerCaseAlphabet= "abcdefghijklmnopqrstuvwxyz"
var upperCaseAlphabet= lowerCaseAlphabet.toUpperCase()
var numbers= "0123456789"
var symbols= "!£$%^&*()@"

// Add event listener to generate button
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSymbols = includeSymbolsElement.checked
  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

// Write password to the #password input
function generatePassword(characterAmount, includeUppercase,
   includeNumbers, includeSymbols) {
  
 
  var length = characterAmount;
  var charset = lowerCaseAlphabet;
  if(includeUppercase)charset+=upperCaseAlphabet
  if(includeNumbers)charset+=numbers
  if(includeSymbols)charset+=symbols
  var retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
   }

function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}


