const express = require('express');
const config = require('./config/config');
const router = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect(config.mongoUrl, () => {
console.log('db initialized...');
})

app.use(cors());
app.use(router);

app.listen(config.port, () => {
  console.log(`Started on port ${config.port}`);
})
