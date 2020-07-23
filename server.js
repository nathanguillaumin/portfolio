const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = 3000;
const extractToken = require('./middlewares/extractToken');

// middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

app.use(extractToken);

app.use('/users', require('./routes/user.routes.js'));
app.use('/technologies', require('./routes/technology.routes.js'));
app.use('/projects', require('./routes/project.routes.js'));
app.use('/messages', require('./routes/message.routes.js'));
app.use('/auth', require('./routes/auth.routes.js'));

const server = app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});

module.exports = server;