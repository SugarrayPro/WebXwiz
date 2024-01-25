FROM node:lts-alpine AS base
RUN npm i -g pnpm

WORKDIR /src
COPY package.json pnpm-lock.yaml /src/
RUN pnpm install

COPY . /src

CMD ["pnpm", "run", "dev"]