const fs = require("fs");

// fs.writeFile("message.txt","Hello from Node",(err) => {
//     if (err) throw err;
//     console.log("arquivo salvo")
// });

fs.readFile("message.txt","utf8",(err,data) => {
    if (err) throw err;
    console.log(data);
});