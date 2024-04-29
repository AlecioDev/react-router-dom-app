FROM node:14.17.3-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY react-router-dom-app /app

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
