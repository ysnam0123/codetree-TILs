const fs = require("fs");
let input = fs.readFileSync(0).toString();
let a = Number(input[0]);
let s = a*a;

if (a>= 5){
    console.log(s);
}
if (a<5){
    console.log("tiny");
}