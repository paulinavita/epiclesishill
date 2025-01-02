### Dependencies ###
FROM node:20-alpine as deps
WORKDIR /app/

COPY ./package*.json .
COPY ./yarn.lock? .

# Enable Corepack
RUN corepack enable

# Set the correct Yarn version
RUN corepack prepare yarn@4.1.0 --activate
RUN yarn install

### Build ###  
FROM node:20-alpine as builder
WORKDIR /app/

# Copy cached node_modules from deps
COPY --from=deps /app/node_modules/ /app/node_modules/
COPY . /app
RUN yarn build

ENTRYPOINT [ "yarn", "start" ]

