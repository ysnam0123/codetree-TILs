const fs=require("fs");
let input = fs.readFileSync(0).toString().trim();
let a = Number(input);

if (a>= 1.0) {
    console.log("High");
}
else if (a>= 0.5){
    console.log("Middle");
}
else {
    console.log("Low");
}