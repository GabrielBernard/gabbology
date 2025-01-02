#!/bin/bash

set -e

SERVER_TARGET="server/target"

build_server() {
    target=${1}
    where=${SERVER_TARGET}/${2}

    cargo build \
        --manifest-path ./server/Cargo.toml \
        --config ./server/.cargo/config.toml \
        --release \
        --target ${target}

    if [[ -d ${where} ]]; then
        rm -rf ${where}
    fi
    mkdir -p ${where}
    mv -f ${SERVER_TARGET}/${target}/release ${where}
}

# Build arm64 (aarch64)
build_server aarch64-unknown-linux-musl linux/arm64
# Build amd64 (x86_64)
build_server x86_64-unknown-linux-musl linux/amd64
