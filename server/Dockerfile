FROM node:18

WORKDIR /home/quiz/api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm","run","server"]