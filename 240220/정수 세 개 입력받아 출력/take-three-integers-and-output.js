const fs = require("fs");

// 표준 입력에서 데이터를 읽어들여 문자열로 저장
let input = fs.readFileSync(0).toString().trim();

// 공백을 기준으로 분리하여 배열로 저장
let values = input.split(" ");

// 각 값을 숫자로 변환
let a = Number(values[0]);
let b = Number(values[1]);
let c = Number(values[2]);

// a와 b와 c를 공백을 두고 순서대로 출력
console.log(a, b, c);