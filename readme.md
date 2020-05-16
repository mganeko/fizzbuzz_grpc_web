
# gRPC-Web proxy with envoy

## reference

- https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld
- https://grpc.io/docs/tutorials/basic/web/

## prepare

- prepare envoy.yaml
- prepare envoy.Dockerfile
  - modify last line of envoy.Dockerfile for mac

```
$ docker build -t fizzbuzz/envoy -f ./envoy.Dockerfile .
$ docker run -d -p 8080:8080 -p 9901:9901 --network=host fizzbuzz/envoy

for Mac
$ docker run -d -p 8080:8080 -p 9901:9901 fizzbuzz/envoy
```

# compile Proto


```
$ wget https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-darwin-x86_64
$ sudo mv ~/Downloads/protoc-gen-grpc-web-1.0.7-darwin-x86_64 \
  /usr/local/bin/protoc-gen-grpc-web
$ chmod +x /usr/local/bin/protoc-gen-grpc-web

$ protoc -I=. fizzbuzz.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
```

--> fizzbuzz_pb.js, fizzbuzz_grpc_web_pb.js

## build client.js

```
$ npm install
$ npx webpack client.js
or
$ npx webpack client.js --mode development
```


