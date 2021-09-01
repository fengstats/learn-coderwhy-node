const qs = require("qs");
const querystring = require("querystring");

const person = {
  name: "chen",
  age: 18,
  sex: "male",
};

const personSearch = "?name=chen&age=18&sex=male";

console.log(qs.stringify(person));
console.log(querystring.stringify(person));

console.log(qs.parse(personSearch));
console.log(querystring.parse(personSearch));
