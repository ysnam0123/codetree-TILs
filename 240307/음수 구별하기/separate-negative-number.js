const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = Number(input[0]);

if(a<0){
    console.log(a);
    console.log("minus");
}