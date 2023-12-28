FROM node:lts-bullseye-slim

RUN apt-get update

RUN apt-get install -y nano htop ranger tmux

USER node

WORKDIR /home/node/app
