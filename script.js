// Assignment Code

const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay= document.getElementById('passwordDisplay')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
  ).concat(
    arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

// Add event listener to generate button
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

// Write password to the #password input
function generatePassword(characterAmount, includeUppercase,
   includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);
 
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() *
     charCodes.lenght)]
    passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
   }

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}


