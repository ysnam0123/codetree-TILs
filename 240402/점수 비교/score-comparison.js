let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let A =input[0].split(" ");
let B =input[1].split(" ");

let a = Number(A[0]);
let b = Number(A[1]);
let c = Number(B[0]);
let d = Number(B[1]);

if (a>c && b>d) {
    console.log("1");
}
else {
    console.log("0");
}