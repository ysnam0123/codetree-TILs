const fs =  require("fs");
let input = fs.readFileSync(0).toString().trim().split(":");
let a = Number(input[0]) + 1;
console.log(a+`:`+input[1]);