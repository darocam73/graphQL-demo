const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require( `cors` );
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql');

const uploadRouter = require('./src/routes/upload');

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(fileUpload({
  createParentPath: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.use('/upload', uploadRouter);

module.exports = app;
