FROM node:lts AS base

RUN corepack enable
RUN corepack prepare pnpm@latest-8 --activate

WORKDIR /src
COPY package.json pnpm-lock.yaml /src/
RUN pnpm install

COPY . /src

CMD ["pnpm", "run", "dev"]