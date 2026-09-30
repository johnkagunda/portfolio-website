# Stage 1: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY portfolio/package.json portfolio/package-lock.json* ./
RUN npm ci
COPY portfolio/ .
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN echo 'server { \
  listen 80; \
  root /usr/share/nginx/html; \
  index index.html; \
  location / { try_files $uri $uri/ /index.html; } \
}' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
