FROM scratch

ARG NEXT_APP
ARG ASSETS
ARG GABBOLOGY_SERVER

COPY ${NEXT_APP} /opt/gabbology/.next
COPY ${ASSETS} /opt/gabbology/assets
COPY ${GABBOLOGY_SERVER} /opt/gabbology/gabbology-server

# Random, high number, user
USER 48749

ENTRYPOINT [ "/opt/gabbology/gabbology-server", "--assets-path", "/opt/gabbology/assets", "--next-path", "/opt/gabbology/.next" ]
