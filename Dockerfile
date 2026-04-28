# ── ÉTAPE 1 : Angular ─
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build  -- --configuration production

# ── ÉTAPE 2 : Serveur Nginx  ─────────
FROM nginx:alpine

COPY --from=build /app/dist/one-piece/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80