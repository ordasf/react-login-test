FROM node:12.13.0-stretch-slim

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci -qy

COPY . .

EXPOSE 3000

CMD ["npm", "start"]