# ── ÉTAPE 1 : Angular ─
# Start your image with a node base image
FROM node:20-alpine AS build

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build  -- --configuration production

