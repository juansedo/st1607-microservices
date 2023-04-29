FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.19.5-alpine as production

COPY --from=builder /app/dist /usr/share/nginx/html

# Running on port 80
CMD ["nginx", "-g", "daemon off;"]