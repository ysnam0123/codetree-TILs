// 입력 및 변수 선언
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let c = a+b;
let d = a-b;

let result = c/d;

console.log(result.toFixed(2));