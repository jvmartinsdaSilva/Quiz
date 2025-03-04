FROM node:alpine

WORKDIR /home/quiz/api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","server"]