FROM node:14-alpine

# Create app directory

RUN mkdir /app
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app/
RUN npm Install

COPY . /app

ENV NODE_ENV QA

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]