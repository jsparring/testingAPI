FROM node:slim

WORKDIR /home/testingAPI

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
