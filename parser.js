const csv = require("csv-parser");
const fs = require("fs");
const results = [];
const data = require("path");
fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
        console.log(results);
        // [
        //   { NAME: 'Daffy Duck', AGE: '24' },
        //   { NAME: 'Bugs Bunny', AGE: '22' }
        // ]
    });
