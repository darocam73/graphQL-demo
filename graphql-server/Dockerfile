FROM node:14

WORKDIR /graphql-server

COPY /graphql-server/package.json .

RUN npm install

COPY /graphql-server .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]