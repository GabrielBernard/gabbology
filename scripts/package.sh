#!/bin/bash

set -e

error() {
    message=${1}

    echo ${message}
    echo "script should be called with ./scripts/package.sh <DEV_CONTAINER> <TAG>"
    exit 1
}

if [[ -z $1 ]]; then
    error "no dev container provided to build the server"
fi

if [[ -z $2 ]]; then
    error "no tag provided for the package"
fi

DEV_CONTAINER=${1}
TAG=${2}
SERVER_TARGET="server/target"
WEBSITE_DIST="website/dist"

build_server() {
    docker run -it --rm -v "$(pwd):/workspaces/gabbology" ${DEV_CONTAINER} \
        bash -c 'cd /workspaces/gabbology && ./scripts/build.sh'
}

build_container() {
    targetplatform=${1}

    docker buildx build \
        --platform ${targetplatform} \
        --file docker/Dockerfile \
        --build-arg STATIC=${WEBSITE_DIST} \
        --build-arg GABBOLOGY_SERVER_TARGET=${SERVER_TARGET} \
        -t ${TAG} .
}

build_server

# Container arm64
build_container linux/arm64
# Container amd64
build_container linux/amd64
