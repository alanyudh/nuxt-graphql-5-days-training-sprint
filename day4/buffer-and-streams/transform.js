"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var stream_1 = require("stream");
var fs = require("fs");
var console_1 = require("console");
var ReplaceText = /** @class */ (function (_super) {
    __extends(ReplaceText, _super);
    function ReplaceText(char) {
        var _this = _super.call(this) || this;
        _this.replaceChar = '';
        _this.replaceChar = char;
        return _this;
    }
    ReplaceText.prototype._transform = function (chunk, encoding, callback) {
        var transformChunk = chunk.toString().replace(/[A-Z]|[a-z]|[0-9]/g, this.replaceChar);
        this.push(transformChunk);
        callback();
    };
    return ReplaceText;
}(stream_1.Transform));
var report = new stream_1.PassThrough();
var readStream = fs.createReadStream(__dirname + "/data.txt");
var writeStream = fs.createWriteStream(__dirname + "/file.txt");
var xStream = new ReplaceText('x');
// readStream.pipe(xStream).pipe(writeStream);
// process.stdin.pipe(xStream).pipe(process.stdout);
report.on('data', function (chunk) {
    console_1.log(chunk.toString());
});
process.stdin.pipe(xStream).pipe(report).pipe(writeStream);
