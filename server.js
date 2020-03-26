const mongoose = require('mongoose');

const dotenv = require('dotenv');

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
    console.log(err);
  });

const port = process.env.PORT || 3000;
const host = '127.0.0.1';

app.listen(port, () => {
  console.log(`App running at ${host}:${port}`);
});
