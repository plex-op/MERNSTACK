const fs = require('fs');

//fs.readFile('./docs/data2.txt', (err, data) => { cant access error file
fs.readFile('./docs/data.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});