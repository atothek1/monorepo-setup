FROM node:14.17-alpine3.14

RUN apk add --no-cache bash

# Create app directory
WORKDIR /usr/src/app

ARG env=development
ARG appName=mono-example
ENV NODE_ENV=$env
ENV APP_NAME=$appName

COPY ./dist .

RUN yarn install --prod

# express listens on port 3000
EXPOSE 3000

# starting the express server
CMD [ "yarn", "start:web" ]
