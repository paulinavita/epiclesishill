# # ### Dependencies ###
# # FROM node:20-alpine as deps
# # WORKDIR /app/

# # COPY ./package*.json .
# # COPY ./yarn.lock? .
# # RUN ls -la /app

# # # Enable Corepack
# # RUN corepack enable

# # # Set the correct Yarn version
# # RUN corepack prepare yarn@4.1.0 --activate
# # RUN yarn install && echo "Yarn install completed" && ls -la /app/

# # ### Build ###  
# # FROM node:20-alpine as builder
# # WORKDIR /app/

# # # Copy cached node_modules from deps
# # RUN ls -la
# # COPY . .
# # COPY --from=deps /app/.pnp.cjs /app/.pnp.cjs
# # COPY --from=deps /app/.pnp.loader.mjs /app/.pnp.loader.mjs

# # RUN apk update
# # RUN apk add python3
# # RUN corepack prepare yarn@4.1.0 --activate
# # RUN yarn global add @medusajs/medusa-cli@latest

# # RUN yarn build

# # ENTRYPOINT ["/bin/sh", "./develop.sh", "start"]

# ### Dependencies ###
# FROM node:20-alpine as deps
# WORKDIR /app/

# COPY ./package*.json .
# COPY ./yarn.lock? .
# RUN ls -la /app

# # Enable Corepack
# RUN corepack enable

# # Set the correct Yarn version
# RUN corepack prepare yarn@4.1.0 --activate
# # Install dependencies
# RUN corepack yarn install && echo "Yarn install completed" && ls -la /app/
# ### Build ###
# FROM node:20-alpine as builder
# WORKDIR /app/

# # Copy the project files and dependencies
# COPY . .
# COPY --from=deps /app/.pnp.cjs /app/.pnp.cjs
# COPY --from=deps /app/.pnp.loader.mjs /app/.pnp.loader.mjs

# RUN apk update
# RUN apk add python3

# # Ensure Yarn version is correct
# RUN yarn --version

# RUN corepack yarn add @medusajs/medusa-cli@latest
# COPY . /app

# # Run build process
# RUN corepack yarn build

# ENTRYPOINT ["/bin/sh", "./develop.sh", "start"]

# ### Dependencies ###
FROM node:20-alpine as deps
WORKDIR /app/

# Copy package files
COPY ./package*.json .
COPY ./yarn.lock? .

# List contents to verify
RUN ls -la /app

# Enable Corepack and set Yarn version
RUN corepack enable yarn && corepack prepare yarn@4.1.0 --activate

# Install dependencies
RUN yarn install && echo "Yarn install completed" && ls -la /app/

# ### Build ###
FROM node:20-alpine as builder
WORKDIR /app/

# Copy source code and dependencies from the previous stage
COPY . .
COPY --from=deps /app/.pnp.cjs /app/.pnp.cjs
COPY --from=deps /app/.pnp.loader.mjs /app/.pnp.loader.mjs

# Update APK packages and install Python
RUN apk update && apk add --no-cache python3

# Confirm Yarn version to avoid potential issues
RUN yarn --version

# Add Medusa CLI globally
RUN corepack enable yarn && corepack prepare yarn@4.1.0 --activate
RUN yarn dlx add @medusajs/medusa-cli@latest

# Build the project
RUN yarn build

# Define the entry point
ENTRYPOINT ["/bin/sh", "./develop.sh", "start"]
