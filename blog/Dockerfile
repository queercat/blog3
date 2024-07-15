# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/npm/tags
FROM node:latest as base
WORKDIR /usr/src/app

COPY . .

ENV NODE_ENV=production

RUN npm install
RUN npm run build

FROM pierrezemb/gostatic
COPY --from=base /usr/src/app/out /srv/http