#!/bin/bash

cargo watch \
    -C server \
    --watch . \
    --watch ../website/assets \
    --watch ../website/src \
    --watch ../website/templates \
    --watch ../website/postcss.config.js \
    --watch ../website/tailwind.config.js \
    --watch ../website/tsconfig.json \
    --watch ../website/vite.config.js \
    --why \
    -x 'run -- --assets-path ../website/dist/'
