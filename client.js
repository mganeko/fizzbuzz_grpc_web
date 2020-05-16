//client.js

// -- for webpack --
const { FizzBuzzRequest, FizzBuzzReply } = require('./fizzbuzz_pb.js');
const { FizzBuzzClient } = require('./fizzbuzz_grpc_web_pb.js');

// --- for rollup --- NG
// import { FizzBuzzRequest, FizzBuzzReply } from 'fizzbuzz_pb';
// import FizzBuzzClient from 'fizzbuzz_grpc_web_pb'


const client = new FizzBuzzClient('http://localhost:8080');
const request = new FizzBuzzRequest();


function callSingleFizzBuzz(client) {
  for (let i = 1; i <= 20; i++) {
    request.setX(i);
    client.singleFizzBuzz(request, {}, (err, response) => {
      //console.log('Resutl of singleFizzBuzz():', response);
      console.log('%d --> %s', i, response.getResult());
    });
  }
}

function callLoopFizzBuzz(client) {
  request.setX(30);
  const stream = client.loopFizzBuzz(request, {});
  stream.on('data', function (response) {
    console.log(response.getResult());
  });
  stream.on('status', function (status) {
    console.log('status:', status.code, status.details, status.metadata);
  });
  stream.on('end', function (end) {
    // stream end signal
    console.log('loopFizzBuzz end ---');
  });
}

// ----
console.log('--- calling singleFizzBuzz() ---')
callSingleFizzBuzz(client);

console.log('--- calling loopFizzBuzz() ---')
callLoopFizzBuzz(client);


