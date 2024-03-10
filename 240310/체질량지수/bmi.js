const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = a/100; //키를 미터로 변환
let d = c*c;
let BMI = parseInt(b/d);

console.log(BMI);

if (BMI >= 25) {
    console.log("Obesity");
}