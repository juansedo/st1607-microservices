FROM node:16-alpine

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app

ENV NODE_ENV QA

# Running on port 3000
CMD ["npm", "start"]