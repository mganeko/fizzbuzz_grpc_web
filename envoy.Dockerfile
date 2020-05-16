# FROM envoyproxy/envoy:latest

FROM envoyproxy/envoy:v1.14.1
COPY ./envoy.yaml /etc/envoy/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml


# build
# $ docker build -t fizzbuzz/envoy -f ./envoy.Dockerfile .

# run
# $ docker run -d -p 8080:8080 -p 9901:9901 fizzbuzz/envoy