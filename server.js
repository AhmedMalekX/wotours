/* eslint-disable no-console */
const mongoose = require('mongoose');

const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('Uncaught Exception! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB connection successful');
  })
  .catch(err => {
    console.log('ERROR 💥');
  });

const port = process.env.PORT || 3000;
const host = '127.0.0.1';

const server = app.listen(port, () => {
  console.log(`App running at ${host}:${port}`);
});

process.on('unhandledRejection', err => {
  console.log('UnhandledRejection! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
