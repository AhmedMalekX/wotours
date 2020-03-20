const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 3000;
const host = '127.0.0.1';

app.listen(port, () => {
  console.log(`App running at ${host}:${port}`);
});
