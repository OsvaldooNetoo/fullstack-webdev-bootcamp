// var generateName = require("sillyname");
import generateName from "sillyName";

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const superheroes = require("superheroes");

const name = superheroes.random();
console.log(`I am ${name}!`);
