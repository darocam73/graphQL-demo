FROM node:14

WORKDIR /graphql-client

COPY /graphql-client/package.json .

RUN npm install

COPY /graphql-client .

EXPOSE 3001

CMD [ "npm", "start" ]