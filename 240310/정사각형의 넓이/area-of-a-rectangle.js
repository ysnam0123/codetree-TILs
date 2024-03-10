const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let a = Number(input);
let s = a*a;

if (a>= 5){
    console.log(s);
}
if (a<5){
    console.log(s);
    console.log("tiny");
}