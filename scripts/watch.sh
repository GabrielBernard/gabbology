#!/bin/bash

cargo watch \
    -C server \
    --watch . \
    --watch ../website \
    --why \
    -x 'run -- --assets-path ../website/dist/'
