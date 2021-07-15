// var http = require("http");
// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });

//     response.end('Hello Word\n');
// }).listen(8081);
// console.log("Server running at http://localhost:8081");
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");
// var fs = require("fs");
// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("Program Ended");
// var events = require('events');

// var eventEmitter = new events.EventEmitter();
// var connectHandler = function connected() {
//     console.log('connection succesful.');
//     eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection', connectHandler);

// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully.');
// });
// eventEmitter.emit('connection');

// console.log("Program Ended.");
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var listner1 = function listner1() {
//     console.log('listner1 executed.');
// }
// var listner2 = function listner2() {
//     console.log('listner2 executed.');
// }

// eventEmitter.addListener('connection', listner1);

// eventEmitter.on('arr', listner2);

// var eventListeners = require('events').EventEmitter.listenerCount
//     (eventEmitter, 'arr');
// console.log(eventListeners + " Listner(s) listening to connection event");

// eventEmitter.emit('arr');

// eventEmitter.removeListener('connection', listner1);
// console.log("Listner1 will not listen now.");

// eventEmitter.emit('connection');

// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// console.log("Program Ended.");
// function printHello() {
//     console.log("Hello, World!");
// }
// //setTimeout(printHello, 2000);
// setInterval(printHello, 2000);