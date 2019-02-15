FROM node:slim

WORKDIR /home/testingAPI

COPY ./package.json ./

RUN npm install --only=prod

COPY . .

CMD ["npm", "start"]
