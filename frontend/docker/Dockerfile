FROM node:18.14-buster as base
RUN npm install -g \
      create-vite@4.1.0 \
      vite@4.1.1

FROM base as dev
RUN apt-get update && \
    apt-get -y install --no-install-recommends \
      gosu \
      nano \
      tmux \
      openssh-server && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY docker/docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

WORKDIR /code
RUN chmod 777 /code

ENTRYPOINT ["/docker-entrypoint.sh"]