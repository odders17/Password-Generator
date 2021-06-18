// Assignment Code
var generateBtn = document.querySelector("#generate")

var pattern_list="abcdefghijklmnopqrstuvwxyz123456789"
var example=''
 
function generate_password(plength){
example=''
for (i=0;i<plength;i++)
example+=pattern_list.charAt(Math.floor(Math.random()*pattern_list.length))
return example
}
 
function execute_To_Generate(enterlength){
document.password_generate.output.value=generate_password(enterlength)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
