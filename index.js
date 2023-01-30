const express = require('express');
const bodyParser = require('body-parser');
const rateLimiter = require("express-rate-limit")
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
});

// app.use(rateLimiter({
//         windowMs: 60 * 1000,             // 1 MINUTE
//         max: 40                          // MAX 40 REQUESTS
//     })
// )

app.use('/posts', require('./routes'))


const port = 3000;
app.listen(port, () => {
  console.log(`Blog app listening on port ${port}!`);
});