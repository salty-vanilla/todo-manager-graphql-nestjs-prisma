#!/bin/bash

# /etc/init.d/ssh start

USER=${USER:user}
UID=${UID:-9001}
GID=${GID:-9001}

echo "Starting with UID : $UID, GID: $GID"
useradd -u $UID -o -m $USER
groupmod -g $GID $USER
export HOME=/home/$USER

exec /usr/sbin/gosu $USER "$@"
