# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:latest as base
WORKDIR /usr/src/app

COPY . .

ENV NODE_ENV=production

RUN bun install
RUN bun run build

# Caddy
FROM caddy:2-alpine AS caddy
COPY --from=base /usr/src/app/out /usr/share/caddy
