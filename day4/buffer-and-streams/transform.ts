import { Transform, PassThrough } from "stream";
import * as fs from 'fs';
import { log } from 'console';

class ReplaceText extends Transform {
    replaceChar = '';
    constructor(char) {
        super();
        this.replaceChar = char;
    }
    _transform(chunk, encoding, callback) {
        const transformChunk = chunk.toString().replace(/[A-Z]|[a-z]|[0-9]/g, this.replaceChar);
        this.push(transformChunk);
        callback();
    }
}
const report = new PassThrough();

const readStream = fs.createReadStream(__dirname + "/data.txt");
const writeStream = fs.createWriteStream(__dirname + "/file.txt");

const xStream = new ReplaceText('x');
// readStream.pipe(xStream).pipe(writeStream);
// process.stdin.pipe(xStream).pipe(process.stdout);
report.on('data', function (chunk) {
    log(chunk.toString());
})
process.stdin.pipe(xStream).pipe(report).pipe(writeStream);