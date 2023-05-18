FROM rust:1.68.2-bullseye AS builder
ARG SERVER_SRC
RUN mkdir -p /build
WORKDIR /build
COPY ${SERVER_SRC} server
RUN cd server \
    && cargo build --release

FROM gcr.io/distroless/cc
ARG NEXT_APP
ARG ASSETS
COPY --from=builder /build/server/target/release/gabbology-server /opt/gabbology/gabbology-server
COPY ${NEXT_APP} /opt/gabbology/.next
COPY ${ASSETS} /opt/gabbology/assets

ENTRYPOINT [ "/opt/gabbology/gabbology-server", "--assets-path", "/opt/gabbology/assets", "--next-path", "/opt/gabbology/.next" ]
