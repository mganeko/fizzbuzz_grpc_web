/**
 * @fileoverview gRPC-Web generated client stub for fizzbuzz
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.fizzbuzz = require('./fizzbuzz_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fizzbuzz.FizzBuzzClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fizzbuzz.FizzBuzzPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.fizzbuzz.FizzBuzzRequest,
 *   !proto.fizzbuzz.FizzBuzzReply>}
 */
const methodDescriptor_FizzBuzz_SingleFizzBuzz = new grpc.web.MethodDescriptor(
  '/fizzbuzz.FizzBuzz/SingleFizzBuzz',
  grpc.web.MethodType.UNARY,
  proto.fizzbuzz.FizzBuzzRequest,
  proto.fizzbuzz.FizzBuzzReply,
  /**
   * @param {!proto.fizzbuzz.FizzBuzzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fizzbuzz.FizzBuzzReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fizzbuzz.FizzBuzzRequest,
 *   !proto.fizzbuzz.FizzBuzzReply>}
 */
const methodInfo_FizzBuzz_SingleFizzBuzz = new grpc.web.AbstractClientBase.MethodInfo(
  proto.fizzbuzz.FizzBuzzReply,
  /**
   * @param {!proto.fizzbuzz.FizzBuzzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fizzbuzz.FizzBuzzReply.deserializeBinary
);


/**
 * @param {!proto.fizzbuzz.FizzBuzzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fizzbuzz.FizzBuzzReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fizzbuzz.FizzBuzzReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fizzbuzz.FizzBuzzClient.prototype.singleFizzBuzz =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fizzbuzz.FizzBuzz/SingleFizzBuzz',
      request,
      metadata || {},
      methodDescriptor_FizzBuzz_SingleFizzBuzz,
      callback);
};


/**
 * @param {!proto.fizzbuzz.FizzBuzzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fizzbuzz.FizzBuzzReply>}
 *     A native promise that resolves to the response
 */
proto.fizzbuzz.FizzBuzzPromiseClient.prototype.singleFizzBuzz =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/fizzbuzz.FizzBuzz/SingleFizzBuzz',
      request,
      metadata || {},
      methodDescriptor_FizzBuzz_SingleFizzBuzz);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.fizzbuzz.FizzBuzzRequest,
 *   !proto.fizzbuzz.FizzBuzzReply>}
 */
const methodDescriptor_FizzBuzz_LoopFizzBuzz = new grpc.web.MethodDescriptor(
  '/fizzbuzz.FizzBuzz/LoopFizzBuzz',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.fizzbuzz.FizzBuzzRequest,
  proto.fizzbuzz.FizzBuzzReply,
  /**
   * @param {!proto.fizzbuzz.FizzBuzzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fizzbuzz.FizzBuzzReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fizzbuzz.FizzBuzzRequest,
 *   !proto.fizzbuzz.FizzBuzzReply>}
 */
const methodInfo_FizzBuzz_LoopFizzBuzz = new grpc.web.AbstractClientBase.MethodInfo(
  proto.fizzbuzz.FizzBuzzReply,
  /**
   * @param {!proto.fizzbuzz.FizzBuzzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fizzbuzz.FizzBuzzReply.deserializeBinary
);


/**
 * @param {!proto.fizzbuzz.FizzBuzzRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.fizzbuzz.FizzBuzzReply>}
 *     The XHR Node Readable Stream
 */
proto.fizzbuzz.FizzBuzzClient.prototype.loopFizzBuzz =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/fizzbuzz.FizzBuzz/LoopFizzBuzz',
      request,
      metadata || {},
      methodDescriptor_FizzBuzz_LoopFizzBuzz);
};


/**
 * @param {!proto.fizzbuzz.FizzBuzzRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.fizzbuzz.FizzBuzzReply>}
 *     The XHR Node Readable Stream
 */
proto.fizzbuzz.FizzBuzzPromiseClient.prototype.loopFizzBuzz =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/fizzbuzz.FizzBuzz/LoopFizzBuzz',
      request,
      metadata || {},
      methodDescriptor_FizzBuzz_LoopFizzBuzz);
};


module.exports = proto.fizzbuzz;

