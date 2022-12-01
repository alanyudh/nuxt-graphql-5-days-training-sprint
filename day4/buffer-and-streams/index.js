var fs = require('fs');

var data = fs.readFileSync(__dirname + "/data.txt", 'utf-8');
console.log("Read Data Sync");
console.log(data);

var data = fs.readFile(__dirname + "/data.txt", 'utf-8',
    function (err, readData) {
        console.log("Read Data 2 Async");
        console.log(readData);
    })

var readableStream = fs.createReadStream(__dirname + "/data.txt", { encoding: 'utf-8' })
readableStream.on('data', function (dataChunk) {
    console.log("Read Data 3 Stream");
    console.log(dataChunk);
})
// var writeableStream = fs.createWriteStream(__dirname + "/data2.txt");

// readableStream.pipe(writeableStream);