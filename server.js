const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); 

const app = express()
const PORT = process.env.PORT || 3001;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populatedb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
});
});

//where do I start to build my API routes? 

//can i get a template in how to build it out for the assignment? 

