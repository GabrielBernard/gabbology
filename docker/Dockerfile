FROM scratch

ARG STATIC
ARG GABBOLOGY_SERVER_TARGET
ARG TARGETPLATFORM

COPY ${STATIC} /opt/gabbology/static
COPY ${GABBOLOGY_SERVER_TARGET}/${TARGETPLATFORM}/release/gabbology-server /opt/gabbology/gabbology-server

# Random, high number, user
USER 48749

ENTRYPOINT [ "/opt/gabbology/gabbology-server", "--assets-path", "/opt/gabbology/static" ]
