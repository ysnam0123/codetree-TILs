// 입력 및 변수 선언
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

// 평균 구하기
// toFixed 메서드를 사용하여 평균을 소수 이하를 버려서 정수로 변환합니다.
let average = ((a + b + c) / 3).toFixed(0);

// 출력
console.log(a + b + c);
console.log(average);