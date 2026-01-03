// Convert the string in the variable name to uppercase and store it in nameupper
var name = "Alice";
var nameupper = name.toUpperCase();
console.log(nameupper);

// Deixe a primeira letra do nome maiúscula e o restante minúscula
var firstLetter = name.charAt(0).toUpperCase();
var restOfName = name.slice(1).toLowerCase();
var properName = firstLetter + restOfName;
console.log(properName);