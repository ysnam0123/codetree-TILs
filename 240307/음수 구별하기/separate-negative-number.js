const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

if(a<0){
    console.log(a);
    console.log("minus");
}