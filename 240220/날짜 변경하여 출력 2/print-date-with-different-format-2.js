const fs = require("fs");
let input = fs.readFileSync(0).toString().split("-");

console.log(input[2] + `.`+ input[0] + `.` + input[1]);