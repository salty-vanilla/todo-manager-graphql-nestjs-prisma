FROM node:18.14-buster as base

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

RUN npm install -g @nestjs/cli@9.2.0

WORKDIR /code
RUN chmod 777 /code

ENTRYPOINT ["/docker-entrypoint.sh"]
