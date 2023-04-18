FROM rust:1.68.2-bullseye AS builder
ARG SERVER_SRC
RUN mkdir -p /build
WORKDIR /build
COPY ${SERVER_SRC} server
RUN cd server \
    && cargo build --release

FROM debian:bullseye-slim
ARG NEXT_APP
ARG ASSETS
RUN mkdir -p /opt/gabbology
WORKDIR /opt/gabbology
COPY --from=builder /build/server/target/release/gabbology-server .
COPY ${NEXT_APP} ./.next
COPY ${ASSETS} ./assets

ENTRYPOINT [ "/opt/gabbology/gabbology-server", "--assets-path", "/opt/gabbology/assets", "--next-path", "/opt/gabbology/.next" ]
